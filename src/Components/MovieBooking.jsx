import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./ContextApi";
import { toast } from "react-toastify";

const MovieBooking = () => {
    const { movieName } = useContext(AppContext)
    console.log(movieName)
    const [formdata, setformdata] = useState({
        name: "",
        date: "",
        myRadio: ""
    })

    const [submitData, setSubmitdata] = useState()

    const UserName = JSON.parse(localStorage.getItem("currentUser")) || {}
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("logedin");
        localStorage.removeItem("currentUser");
        navigate("/Login")
    }

    // count 
    const [Count, setCount] = useState(0)
    const incClick = (event) => {
        event.preventDefault();
        if (Count === 8) {
            toast("max 8")
            return;
        }
        setCount(Count +1)
    }
    const decClick = (event) => {
        event.preventDefault();
        if (Count - 1 < 0) {
            toast("qwe")
        }
        else {
            setCount(Count - 1)
        }
    }
    // const resClick = (event) => {
    //     event.preventDefault();
    //     setCount(0);
    // }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
        // console.log(Count)

        setSubmitdata({ ...formdata, Count })
        toast("Make payment")

    }
    const handelChenge = (event) => {
        setformdata((prev) => ({ ...prev, [event.target.name]: event.target.value }))

    }
    return (
        <>
            <div className="BookingMain">
                <div className="Bookingnav">
                    <p>Wellcome, {UserName.User || "Guest"}</p>
                    <button onClick={handleLogout} type="button">LogOut</button>
                </div> <br />
                <div className="BookingCard">
                    <div className="moviename">{movieName?.state?.title} ABCDEF GHIJK</div>
                    <form onSubmit={handelSubmit}>
                        <div className="inputs">
                            <input type="text" className="name" name="name" onChange={handelChenge} value={formdata.name} placeholder="Enter Your Name" /><br />
                            <input type="date" className="date" name="date" onChange={handelChenge} value={formdata.date} />
                        </div>
                        <div className="time">
                            <p>
                                <b>Time:</b>
                            </p>
                            <label>
                                <input type="radio" name="myRadio" onChange={handelChenge} value="12:00 PM - 02:00 PM" />
                                11:00 PM - 01:30 PM
                            </label>
                            <label>
                                <input type="radio" name="myRadio" onChange={handelChenge} value="02:00 PM - 04:30 PM" />
                                02:00 PM - 04:30 PM
                            </label>
                            <label>
                                <input type="radio" name="myRadio" onChange={handelChenge} value="05:00 PM - 07:30 PM" />
                                05:00 PM - 07:30 PM
                            </label>

                        </div>
                        <div className="ticket">
                            <h4>Ticket:</h4>
                            <button className="btn1" onClick={incClick} >+</button>
                            <p>{Count}</p>
                            <button className="btn1" onClick={decClick}>-</button>
                            {/* <button className="btn1" onClick={resClick}>Reset</button> */}
                        </div>
                        <button type="submit" className="submitbtn">Submit</button>
                    </form>

                    <hr />
                    {submitData && (
                        <div className="DisplayData">
                            <h2>Booking Details:</h2>
                            <p><strong>Name:</strong> {submitData.name} </p>
                            <p><strong>Date:</strong> {submitData.date}</p>
                            <p><strong>Time:</strong> {submitData.myRadio}</p>
                            <p><strong>Number of Tickets:</strong> {submitData.Count}</p>
                        </div>
                    )}
                    <button className="payment" on><Link to="/Payment">Make Payment</Link></button>
                </div>
            </div>

        </>
    )
}
export default MovieBooking;