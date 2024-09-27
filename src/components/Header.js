import React, { useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";   // itis similar to anchor tag <a/>
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header=()=>{

    // let btnName = "Login"  // for changing login to logout on ui
    // btnName will not be change anythingin ui b/c react unable to understand that btnName has updated or not 
    // so that we use useState for changing on the ui

    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)



    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    useEffect(() => {
        console.log("useEffect is called");
    }, [btnNameReact])  // wif the depnedency array is called btnNameReact => useEffect is called every click on btnNameReact

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt=""/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 ">  
                    {/* Don't use anchor tag <a/> in react b/c it reload the page everytime */}

                    {/* <li><a href="/"> Home</a></li>   
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li>Cart</li> */}

                    <li className="px-4">Online status : {onlineStatus ? "😊" : "😔"}</li>
                    <li className="px-4" ><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    
                    <button className="login-btn" onClick={() => {btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")} 
                    }> {btnNameReact}</button>

                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;