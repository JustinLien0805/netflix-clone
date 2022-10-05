import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="relative h-full w-screen flex">
      <img
        src={require("../assets/netflixLogo.png")}
        alt="logo"
        className="fixed left-4 h-20 w-30 cursor-pointer"
      />
      <button
        className="bg-red-600 fixed top-4 right-10 text-xl text-white py-2 px-4 rounded-sm"
        onClick={() => {
          setSignIn(true);
        }}
      >
        Sign In
      </button>
      <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-center text-white ">
        {signIn ? (
          <SignUpForm />
        ) : (
          <>
            <h2 className=" font-bold text-5xl w-[700px]">
              Unlimited flims, TV programs and more.
            </h2>
            <h3 className=" font-semibold text-2xl">
              Watch Anywhere, Cancel at any time
            </h3>
            <form className="mt-4" action="">
              <input
                className="w-96 h-12"
                type="email"
                placeholder="abc@gmail.com"
              />
              <button
                className="bg-red-600 h-12 px-4 py-2 font-bold"
                onClick={() => {
                  setSignIn(true);
                }}
              >
                GET STARTED
              </button>
            </form>
          </>
        )}
      </div>
      <img
        className="h-full w-full object-cover"
        src={require("../assets/netflx.jpeg")}
        alt=""
      />
    </div>
  );
};

export default LoginScreen;
