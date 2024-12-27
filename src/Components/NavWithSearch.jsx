import React, { useContext } from "react";
import logo from '../assets/homeimg/logo.png'
import { Link, useNavigate } from "react-router-dom";
import img3 from "../assets/homeimg/img3.png"
import Buttons from "./Buttons";
import { AppContext } from "./ContextApi";

const NavWithSearch =()=>{
const navigate = useNavigate()
const click =()=>{
  navigate("/login")
}
const {search,setSearch}= useContext(AppContext)

    return(
        <>
        <div className="navBar">
        <div className="logo">
          <img src={logo} className="" alt="" srcset="" />
        </div>
        <form>
        <div className="serachbar">
        <input type="text" className="textInput"placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <img src={img3} alt="" srcset="" />
        </div>
        </form>
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
export default NavWithSearch;