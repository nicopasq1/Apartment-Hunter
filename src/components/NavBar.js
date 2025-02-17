import React from "react";
import { NavLink } from "react-router";

function NavBar(){
    return (
        <div className="navBar">
            <nav>
                <NavLink to={'/home'}>Home</NavLink>
                <br/>
                <NavLink to={'/page'}>Go to Page</NavLink>
            </nav>
        </div>
    )
}

export default NavBar