import React, { useEffect, useState } from "react";
import Header from "./Header";
import { HOME_IMG_URL } from "../utils/constants";
const Login = () => {
  const [btn, setBtn] = useState("Sign In");
  const [signUpLabel, setSignUpLabel] = useState(true);


const handleClick = () => {
    return btn === "Sign In"
      ? (() => {
          setBtn("Sign Up");
          setSignUpLabel(false);
          return null;
        })()
      : (() => {
          setBtn("Sign In");
          setSignUpLabel(true);
          return null;
        })();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={HOME_IMG_URL} alt="homeImage" />
      </div>
      <form className="p-12 bg-black rounded-lg bg-opacity-80 absolute w-3/12 mx-auto my-48 right-0 left-0 ">
        <div className="font-bold text-white">
          <h1 className="text-4xl py-4 my-2">Sign In</h1>
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm"
            type="text"
            placeholder="Email Address"
          ></input>
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm"
            type="text"
            placeholder="Full Name"
          ></input>
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm"
            type="password"
            placeholder="password"
          ></input>
          <button className="w-full py-4 my-2 rounded-md bg-red-600 cursor-pointer">
            {btn}
          </button>
          {signUpLabel && (
            <p className="py-4">
              New to netflix?{" "}
              <span
                onClick={() => handleClick()}
                className="border-solid  border-b border-white cursor-pointer"
              >
                Sign Up
              </span>{" "}
              now
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
