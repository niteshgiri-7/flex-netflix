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
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [btn, setBtn] = useState("Sign In");
  const [signInForm, setsignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleMainBtn = () => {
    const eml = email.current.value;
    const pw = password.current.value;
    const nm = name.current ? name.current.value : null;
    const formMsg = formValidate(eml, pw, nm,signInForm);
    console.log(formMsg);
    setErrMsg(formMsg);
    if (formMsg !== null) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(auth, eml, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: nm,
          }).then(() => {
            navigate("/browse");
          });
        })
        .catch((error) => {
          setErrMsg(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, eml, pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrMsg(error.message);
        });
    }
  };
  const handleClick = () => {
    return btn === "Sign In"
      ? (() => {
          setBtn("Sign Up");
          setsignInForm(false);
          return null;
        })()
      : (() => {
          setBtn("Sign In");
          setsignInForm(true);
          return null;
        })();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={HOME_IMG_URL} alt="homeImage" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-12 bg-black rounded-lg bg-opacity-80 absolute w-3/12 mx-auto my-48 right-0 left-0 "
      >
        <div className="font-bold text-white">
          <h1 className="text-4xl py-4 my-2">{btn}</h1>
          <input
            className="w-full p-4 my-2 bg-gray-700 rounded-sm"
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
          >
            {btn}
          </button>
          {signInForm && (
            <p className="py-4">
              New to netflix?{" "}
              <span
                onClick={() => handleClick()}
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
