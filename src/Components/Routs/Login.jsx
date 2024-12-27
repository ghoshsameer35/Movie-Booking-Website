import React, { useState } from "react";
import Nav from "../Nav";
import logo from "../../assets/homeimg/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
    const [formData, setformData] = useState({
        User: "",
        password: ""
    })

    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        const users = JSON.parse(localStorage.getItem("user"));
        //   const loggeduesr=  JSON.parse (localStorage.getItem("user"));
        const foundUser = users.find(
            (user) => user.User === formData.User && user.password === formData.password
            // formData.User===loggeduesr.User && formData.password===loggeduesr.password
        );
        if(!formData.User||!formData.password ){
            toast("enter value")
        }else{
        if (foundUser) {
            localStorage.setItem("logedin", true)
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            navigate("/MovieBooking")
            toast("Sucessfully Logidin")
        }
        else {
            toast("Invalid UserId or Password. Please try again.")
        }
    }
    }
    
    const handelChenge = (event) => {
        // console.log(event.target.value)
        setformData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        // const { name, value } = event.target
        // setformData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <div className="loginmain">
                <Nav /><br />

                <div className="logincard_maim">
                    <div className="logincard">
                        <div className="round">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <form onSubmit={handelSubmit}>
                            <input type="text" name="User" onChange={handelChenge} value={formData.User} placeholder="User Id" /> <br />
                            <input type="password" name="password" onChange={handelChenge} value={formData.password} placeholder="Password" /><br />
                            <button type="submit" className="loginbtn">Login</button>
                        </form>
                        <h5>Create an account <Link to="/SignUp">Cleak Here</Link> </h5>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login