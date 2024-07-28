import React from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { toggleShowGpt } from "../utils/Slices/gptSlice";
import { supported_languages } from "../utils/constants";
import { chooseLanguage } from "../utils/Slices/langConfSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); //unsubscribes (onAuthSateChanged callback) when header unmounts
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(toggleShowGpt());
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const handleGptClick = () => {
    dispatch(toggleShowGpt());
  };
  const handleOptLangChoice = (e)=>{
    dispatch(chooseLanguage(e.target.value))
  }
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black absolute z-30 w-full  flex justify-between">
      <img className="w-44 z-50" src={LOGO_URL} alt="logo" />
      {user && (
        <div>
          {showGpt && (
            <select className="bg-gray-700 px-4 py-2 m-2 rounded-lg text-white font-normal" onChange={(e)=>handleOptLangChoice(e)}>
            {supported_languages.map((sprt_lan)=>
              <option key={sprt_lan.identifier} value={sprt_lan.identifier}>{sprt_lan.name}</option>
            )}
            </select>
          )}
          <button
            className="bg-purple-700 px-4 py-2 mx-4 my-2 rounded-lg text-white font-bold"
            onClick={() => handleGptClick()}
          >
            {showGpt ? "Home" : "searchGpt"}
          </button>
          <button
            className="bg-red-600 rounded-md m-2 p-2 text-white font-bold hover:bg-red-700"
            onClick={() => handleSignout()}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
