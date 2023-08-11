import React from "react";
import {NavLink} from "react-router-dom"
import "./NavBar.css"

function NavBar(){
    return(
        <div className="nav-bar">
            
            <NavLink to="/">
                <strong>Home</strong>
            </NavLink>
            
            <NavLink to="/students">
                <strong>Students</strong>
            </NavLink>
            
        </div>
    )
}

export default NavBar;