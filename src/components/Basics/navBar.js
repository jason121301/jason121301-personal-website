import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './navBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from "./images/zoomedLogo.jpg";
import About from "../aboutPage/about";

function NavBar() {

    return (
        <ul class="homeNavBar nav justify-content-center mt-3">
            <li class="nav-item">
            <a class="navbar-brand">
            <img 
              src={Logo}
              alt="Logo" 
              width="80" 
              height="35"/>
            </a>

            </li>

            <li class="nav-item">
                <Link to="/" class="nav-link" style={{color:"rgba(0,179,150,255)"}} href="#">Winning Springs</Link>
            </li>
            <li class="nav-item">
                <Link to="/about" className="nav-link" style={{color:"rgba(0,179,150,255)"}}>About Us</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" style={{color:"rgba(0,179,150,255)"}} href="#">Payments</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style={{color:"rgba(0,179,150,255)"}}href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
            </li>
        </ul>
    )
}

export default NavBar;
