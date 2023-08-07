import React from "react";
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div>
            
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