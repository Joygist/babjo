import React from "react";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import {Routes, Route} from 'react-router-dom';
import AboutUs from "../pages/Doctors/AboutUs";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>

    </Routes>
}

export default Routers