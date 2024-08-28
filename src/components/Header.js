import React from "react";
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";


const Header=()=>{

    // let btnName = "Login"  // for changing login to logout on ui
    // btnName will not be change anythingin ui b/c react unable to understand that btnName has updated or not 
    // so that we use useState for changing on the ui

    const [btnNameReact, setBtnNameReact] = useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")} 
                    }> {btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;