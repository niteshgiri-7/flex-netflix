import React from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      }
      else{
        dispatch(removeUser());
        navigate("/");
      }
    })
},[])


  const handleSignout = () => {
    
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black absolute z-10 w-screen  flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && <button className="bg-red-600 rounded-md m-2 p-2 text-white font-bold hover:bg-red-700"onClick={() => handleSignout()}>Log Out</button>}
    </div>
  );
};

export default Header;
