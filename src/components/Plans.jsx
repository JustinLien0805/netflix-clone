import React, { useState, useEffect } from "react";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
const Plans = () => {
  const [products, setProduct] = useState([]);
  const user = useSelector(selectUser);
  const [sub, setSub] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSub({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProduct(products);
      });
  }, []);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51LpXsmJ1jaXJ4BhsN67UYsjVH8D58ck4Xt7IVRbT7kA1UX3HqSxxA75d9mrWKW2zMa6cfD1gYRlxRYj7SZynbIMn00irz3l0uG"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="flex flex-col border-b-2 border-b-[#1c1c1c]">
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check if the user's subscription is active...
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(sub?.role);

        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage ? "opacity-100" : "opacity-80 hover:opacity-100"
            } flex py-4`}
          >
            <div className="mr-auto">
              <h5 className="mr-auto font-semibold">{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
              className={`${
                isCurrentPackage
                  ? "bg-white text-red-600 opacity-100"
                  : `bg-red-600`
              } rounded-sm px-4 py-2 font-bold`}
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
      {sub && (
        <p className="ml-auto">
          Renewal date:{" "}
          {new Date(sub?.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default Plans;
