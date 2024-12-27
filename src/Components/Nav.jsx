import React from "react";
import logo from '../assets/homeimg/logo.png'
import { Link, useNavigate } from "react-router-dom";
import img3 from "../assets/homeimg/img3.png"
import Buttons from "./Buttons";

const Nav =()=>{
const navigate = useNavigate()
const click =()=>{
  navigate("/login")
}


    return(
        <>
        <div className="navBar">
        <div className="logo">
          <img src={logo} className="" alt="" srcset="" />
        </div>
        <div className="serachbar">
        {/* <input type="text" className="textInput"placeholder="Search" /> */}
        {/* <img src={img3} alt="" srcset="" /> */}
        </div>
        {/* Navigation */}
        <div className="navigation">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/Movie">Movies</Link></li>
            <Buttons text="Login" onClick={click} className="login"/>
          </ul>
        </div>
      </div> 
        </>
    )
}
export default Nav;