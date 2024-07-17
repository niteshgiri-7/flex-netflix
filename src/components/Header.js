import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    return (
        <div className="px-8 py-2 bg-gradient-to-b from-black absolute z-10">
            <img className="w-44"src={LOGO_URL} alt="logo"/>
        </div>
    )
}

export default Header;