import React, { useRef, useState } from "react";
import Header from "./Header";
import { HOME_IMG_URL } from "../utils/constants";
import { formValidate } from "../utils/formValidate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [btnName, setBtnName] = useState("Sign In");
  const [isLoading,setIsLoading]=useState(false);
  const [signInForm, setsignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleMainBtn = () => {
    const eml = email.current.value;
    const pw = password.current.value;
    const nm = name.current ? name.current.value : null;
    const formMsg = formValidate(eml, pw, nm, signInForm);
    setErrMsg(formMsg);
    if (formMsg !== null) return;
  
    setIsLoading(true);
    if (!signInForm) {
      createUserWithEmailAndPassword(auth, eml, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nm,
          }).then(() => setIsLoading(false));
        })
        .catch((error) => {
          setIsLoading(false)
          setErrMsg(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, eml, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsLoading(false);
        })
        .catch((error) => {
          setErrMsg(error.message);
          setIsLoading(false)
        });
    }
  };
  const handleSignUPLabel = () => {
    return btnName === "Sign In"
      ? (() => {
          setBtnName("Sign Up");
          setsignInForm(false);
          return null;
        })()
      :(() => {
          setBtnName("Sign In");
          setsignInForm(true);
          return null;
        })();
  };

  return (
    <div>
      <Header />
      <div className="">
        <img className="w-full h-full absolute"src={HOME_IMG_URL} alt="homeImage" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-12 bg-black bg-opacity-80 rounded-lg absolute max-w-sm md:max-w-md max-h-fit inset-0 m-auto"
      >
        <div className="font-bold text-white">
          <h1 className="text-4xl py-4 my-2">{btnName}</h1>
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm focus:bg-gray-700"
            type="text"
            placeholder="Email Address"
            ref={email}
          ></input>
          {!signInForm && (
            <input
              className="w-full p-4 my-2 bg-gray-700 rounded-sm"
              type="text"
              placeholder="Full Name"
              ref={name}
            ></input>
          )}
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm"
            type="password"
            placeholder="password"
            ref={password}
          ></input>
          <p className="text-red-600 text-lg py-4 font-bold">{errMsg}</p>
          <button
            className="w-full py-4 my-2 rounded-md bg-red-600 cursor-pointer"
            onClick={() => handleMainBtn()}
            disabled={isLoading}
          >
            { isLoading ? "Loading..."  : btnName }
          </button>
          {signInForm && (
            <p className="py-4">
              New to netflix?{" "}
              <span
                onClick={() => handleSignUPLabel()}
                className="border-solid  border-b-4 border-white cursor-pointer"
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
