import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Buttons from "./Buttons";
import { AppContext } from "./ContextApi";
import { IoMdClose } from "react-icons/io";


// import { FaStar } from "react-icons/fa";


const MovieDetails = ()=>{
    const {setMovieName} = useContext(AppContext)
    const params=useParams()

    const location =useLocation()
    console.log(location)
    setMovieName(location)
    
    const navigate = useNavigate()
    console.log(location)
    const click=()=>{
        navigate("/login")
    }
    
    const handelClose = ()=>{
        navigate("/Movie")
    }

    
    return(
        <>
        
        <div className="Movie_containr">

        <div className="Movie_Main">
       <IoMdClose className="close"onClick={handelClose} />
            <div className="Movie_Card">
            <img src={`https://image.tmdb.org/t/p/w500/${location.state.poster_path}`} alt="" srcset="" />
            <div className="overley6">
            </div>
            </div>
            <div className="Movie_Details"> 
                {/* <h1>{params.id}</h1> */}
                <h1>{location.state.title}</h1>
                {/* <span><FaStar className="icon"/></span> */}
                <span><p>{location.state.vote_average}</p></span>
                <p>{location.state.overview.slice(0,200)}...</p>
                <Buttons text="Book Now" onClick={click} className="booking"/>
            </div>
        </div>
        </div>      
        </>
    )
}
export default MovieDetails