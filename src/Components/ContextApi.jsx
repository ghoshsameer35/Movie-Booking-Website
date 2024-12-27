import axios from "axios";
import React, { useEffect, useState } from "react";
import {createContext} from "react";

const AppContext = createContext()

const ContextApi=({children})=>{
  // top_rated
  const [data, setData] = useState([]);
  const [Err, setErr] = useState("");
  const [movieName, setMovieName] = useState(null);


  // Upcoming
  const [data1, setData1] = useState([]);
  const [Err1, setErr1] = useState("");
  // Popular
  const [data2, setData2] = useState([]);
  const [Err2, setErr2] = useState("");
  //input value search
  const [search,setSearch] = useState("")
  // ************************
  // top_rated
  const topRated = async (url) => {
    try {
      const responce = await axios.get(url)
      // console.log(responce.data.results)
      setData(responce.data.results)
      // const movieData= await responce.data
      // setData(movieData)
    } catch (error) {
      // console.log(error.message)
      setErr(error.message)
    }
  }
  // ************************
  // UpComing
  const UpComing = async (url) => {
    try {
      const responce = await axios.get(url)
      console.log(responce.data.results)
      setData1(responce.data.results)
      // const movieData= await responce.data
      // setData(movieData)
    } catch (error) {
      // console.log(error.message)
      setErr1(error.message)
    }
  }
// Popular
const Popular = async (url) => {
  try {
    const responce = await axios.get(url)
    // console.log(responce.data.results)
    setData2(responce.data.results)
    // const movieData= await responce.data
    // setData(movieData)
  } catch (error) {
    // console.log(error.message)
    setErr2(error.message)
  }
}


  // ******************

  useEffect(() => {
    // top_rated
    topRated("https://api.themoviedb.org/3/movie/top_rated?api_key=2bfc10448ea9308c86b6f1d58e7543a3")
    UpComing("https://api.themoviedb.org/3/movie/upcoming?api_key=2bfc10448ea9308c86b6f1d58e7543a3")
    Popular("https://api.themoviedb.org/3/movie/popular?api_key=2bfc10448ea9308c86b6f1d58e7543a3")
  }, [])


    return(
        <>
        <AppContext.Provider value={{data,Err,data1,Err1,data2,Err2,search,setSearch,movieName,setMovieName}}>
        {children}
        </AppContext.Provider>
        </>
    )
}
export  {AppContext,ContextApi}