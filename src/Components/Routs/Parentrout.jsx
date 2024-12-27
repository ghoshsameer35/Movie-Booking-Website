import React from "react";
import Home from "../Home";
import Movie from "./Movie";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import MovieDetails from "../MovieDetails";
import SignUp from "../SignUp";
import MovieBooking from "../MovieBooking";
import Protectedrout from "./ProtectedRout";
import Payment from "../../Payment";


const ParentRout = () => {


    return (
        <>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Movie" element={<Movie />}></Route>
                <Route path="/movie/:id" element={<MovieDetails />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>
                {/* <Route path="/Payment" element={<Payment />}></Route> */}
                <Route path="/MovieBooking" element={
                    <Protectedrout>
                    <MovieBooking />
                </Protectedrout>}>
                </Route>
                <Route path="/Payment" element={
                    <Protectedrout>
                    <Payment />
                </Protectedrout>}>
                </Route>
                {/* <Route path="/MovieDetails/:id" element={<MovieDetails/>}></Route> */}
            </Routes>

        </>
    )
}
export default ParentRout;