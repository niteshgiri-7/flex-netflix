import React from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = ()=>{
    const navigate = useNavigate();
    const handleSignout = ()=>{
        signOut(auth)
        .then(()=>{
            navigate("/");
        })
        .catch(()=>{
            navigate("/error");
        })
    }
    return (
        <div className="px-8 py-2 bg-gradient-to-b from-black absolute z-10 w-screen  flex justify-between">
            <img className="w-44"src={LOGO_URL} alt="logo"/>
            <button onClick={()=>handleSignout()}>SignOut</button>
        </div>
    )
}

export default Header;