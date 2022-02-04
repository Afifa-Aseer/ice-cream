import React from "react"
import logo from "../img/logo.png"
import "./style.css"
const header=()=>
{
    return(
        <div className="headerbox">
        <div className="logo">
            <img className="logo" src={logo} alt="" />
        </div>
        <div className="navbar">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>FEEDBACK</li>
            </ul>
        </div>
    </div>
    )
}
export default header