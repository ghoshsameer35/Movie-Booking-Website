import React, { useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const signup = () => {
    const [formData, setformData] = useState([{
        User: "",
        email: "",
        password: ""
    }])
    // const [userdata, setuserdata] = useState(() => {
    //     // Initialize userdata from localStorage if it exists
    //     const storedData = localStorage.getItem("user");
    //     return storedData ? JSON.parse(storedData)  : [];
    // });
    const [userdata, setuserdata] = useState(() => JSON.parse(localStorage.getItem("user")) || []);
    const navigate= useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        // localStorage.setItem("user", JSON.stringify(...userdata, formData));
if(!formData.User||!formData.email||!formData.password ){
    toast("enter value")

}else if(formData.User.length < 6 ){
    toast("username should be minimum 6 charecter")
}

else{
    toast("submit")
        const updatedUserdata = [...userdata, formData];
        setuserdata(updatedUserdata);

        localStorage.setItem("user", JSON.stringify(updatedUserdata));

        navigate("/Login")
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
            <div className="signmain">
                <Nav /><br />
                <div className="sign">
                    <div className="signcard_main">
                        <form onSubmit={handelSubmit}>
                            <h5>User Id</h5>
                            <input type="text" name="User" onChange={handelChenge} value={formData.User} /> <br />
                            <h5>Email</h5>
                            <input type="text" name="email" onChange={handelChenge} value={formData.email} /> <br />
                            <h5>Password</h5>
                            <input type="password" name="password" onChange={handelChenge} value={formData.password} /> <br />
                            <button type="submit">Submit</button>
                            <h5> <Link to="/Login">Cleak Here</Link>To Log In </h5>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default signup;