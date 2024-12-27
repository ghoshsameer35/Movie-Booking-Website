import React, { useContext, useEffect, useState } from "react";
import {AppContext} from '../ContextApi'
import NavWithSearch from "../NavWithSearch";
import { NavLink} from "react-router-dom";
import axios from "axios";
// import MovieDetails from "../MovieDetails";
// import { Link } from "react-router-dom";
const Movie=()=>{
    const {data,data1,data2,search} = useContext(AppContext)
    const results = data.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    const results1 = data1.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    const results2 = data2.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    // ******************
    // search 
    // const [allMovies, setAllMovies] = useState([]);
    // const [searchQuery, setSearchQuery] = useState("");
    // const apikey = "2bfc10448ea9308c86b6f1d58e7543a3"
    // const getSearchMovie=async()=>{
    //   try {
    //     const res = await axios.get(
    //       `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}`
    //     );
    //     console.log(res.data);
    //     setAllMovies(res?.data?.results)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // useEffect(()=>{
    //   getSearchMovie()
    // },[searchQuery])
    // ***************************************************
    

    return(
        <>
        <div className="movie_main">
        <NavWithSearch/>

        {/* <div>
        <input
          placeholder="search the movie"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button className="search-button" label="search" onClick={searchMovie} />
      </div> */}
        <div className="movie">
          <div className="heading1">
      </div>
      {/* <div className="cardMain1"> */}
      {results.map((ele)=>{
        const{title,poster_path,id,overview}=ele
          return(
            <>
       <NavLink to={`/Movie/${id}`}state={{title,poster_path,overview}}> 
        <div className="cardBody1">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" srcset="" />
            <div className="overley3">
          <p>{title}</p>
        </div> 
        </div>
        </NavLink>  
      </>
          )
      })}
    {/* </div> */}
    {/* ************************************************ */}
    <div className="heading1">
      </div>
      {/* <div className="cardMain1"> */}
      {results1.map((ele)=>{
        const{title,poster_path,id,overview}=ele
          return(
            <>
            <NavLink to={`/Movie/${id}`} state={{title,poster_path,overview}}>
        <div className="cardBody1">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" srcset="" />
            <div className="overley3">
          <p>{title}</p>
        </div> 
        </div>
      </NavLink>
      </>
          )
        })}
    {/* </div> */}
    {/* *************************************** */}

    <div className="heading1">
      </div>
      {/* <div className="cardMain1"> */}
      {results2.map((ele)=>{
        const{title,poster_path,id,overview}=ele
          return(
            <>
      <NavLink to={`/Movie/${id}`}state={{title,poster_path,overview}}>
        <div className="cardBody1">
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
    </div>
    {/* </div> */}
    
    
        </>
    )
}
export default Movie