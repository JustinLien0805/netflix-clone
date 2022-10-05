import React, { useRef } from "react";
import { auth } from "../firebase";

const SignUpForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="bg-[#111] w-96 h-72 rounded-md flex flex-col justify-center items-center space-y-4">
      <h2 className="text-3xl text-red-600 font-bold text-left w-72">
        Sign In
      </h2>
      <form className="flex flex-col space-y-4 text-black">
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="h-12 w-72"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="h-12 w72"
        />
        <button
          className="bg-red-600 font-bold px-4 py-2 mt-4"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
      </form>
      <h4 className="text-left w-72">
        <span className="text-neutral-500">New to Netflix? </span>
        <u className="cursor-pointer" onClick={register}>
          Sign Up Now
        </u>
      </h4>
    </div>
  );
};

export default SignUpForm;
