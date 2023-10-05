import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"


function Header() {

    return (
        <nav class="navbar navbar-expand-lg navbar-transparent bg-transparent border-bottom">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <span class="navbar-text" style={{fontSize:"10px"}}>4233 Medical Center Drive, Fakeland</span>
                    </li>
                </ul>
            
                <ul class="nav">
                    <li class="nav-item px-2">
                        <button class="btn btn-sm" type="button" className="headerButton">Services</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-sm" type="button" className="headerButton">Contact Us</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
