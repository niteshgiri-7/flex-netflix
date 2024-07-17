import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    return (
        <div>
            <img className="h-16 m-4 bg-gradient-to-t to-black absolute w-auto"src={LOGO_URL} alt="logo"/>
        </div>
    )
}

export default Header;