import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { DiPhonegap } from "react-icons/di";
import { GoHeartFill } from "react-icons/go";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";

// bootstrap section
// import Nav from 'react-bootstrap/Nav';
// images section
import img1 from '../assets/homeimg/img1.avif';
import img2 from '../assets/homeimg/img2.jpg';
// import axios from "axios";
import { AppContext } from "./ContextApi";
import Nav from "./Nav";
// components
const Home = () => {

  const { data, data1, data2 } = useContext(AppContext)



  return (
    <>
      <div className="HomeContainer">
        <Nav />
        {/* Herosection */}
        {/* <div className="mainbackground"> */}
        <div className="backGround">
          <img src={img2} className="img2" alt="React logo" />
          <div className="overley2">
            <h1>Ready, set, action <br /> <p>Endless Entertainment Anytime.Anywhere!</p></h1>
          </div>
        </div>
        {/* </div> */}
        {/* card section  */}

        <div className="heading">
          <h1>Top Rated Movies</h1>
          <p><Link to="/Movie">View All</Link></p>
        </div>
        <div className="cardMain">
          {data.slice(0, 5).map((ele) => {
            const { title, poster_path,id,overview } = ele
            return (
              <>
                <NavLink to={`/Movie/${id}`}state={{title,poster_path,overview}}> 
                <div className="cardBody">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" srcset="" />
                  <div className="overley3">
                    <p>{title}</p>
                  </div>
                </div>
                 </NavLink>  
              </>
            )
          })}
        </div>

        {/* ************************ */}
        <div className="heading">
          <h1>Upcoming Movies</h1>
          <p><Link to="/Movie">View All</Link></p>
        </div>
        <div className="cardMain">
          {data1.slice(0, 5).map((ele) => {
            const { title, poster_path,overview,id } = ele
            return (
              <>
<NavLink to={`/Movie/${id}`}state={{title,poster_path,overview}}> 
                <div className="cardBody">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" srcset="" />
                  <div className="overley4">
                    <p>{title}</p>
                  </div>
                </div>
                </NavLink>
              </>
            )
          })}
        </div>
        {/* *************************************** */}
        <div className="static">
        <h1>More reason to join</h1>
        <div className="staticcard">
          <div className="staticcardmain"><h4>Stories tailored to your taste</h4><FaHandsHelping className="hand" />
          </div>
          <div className="staticcardmain"><h4>Cancel or switch plans anytime</h4><MdOutlineSwitchAccessShortcutAdd className="hand" /></div>
          <div className="staticcardmain"><h4>A place just for kids</h4><GoHeartFill className="heart" /></div>
          <div className="staticcardmain"><h4>For your phone, tablet, laptop and TV</h4><DiPhonegap className="hand" /></div>
        </div>
        </div>
        {/* **************************************** */}
        <div className="heading">
          <h1>Popular Movies</h1>
          <p><Link to="/Movie">View All</Link></p>
        </div>
        <div className="cardMain">
          {data2.slice(0, 5).map((ele) => {
            const {title, poster_path,overview,id} = ele
            return (
              <>
<NavLink to={`/Movie/${id}`}state={{title,poster_path,overview}}> 
                <div className="cardBody">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" srcset="" />
                  <div className="overley5">
                    <p>{title}</p>
                  </div>
                </div>
                </NavLink>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Home;