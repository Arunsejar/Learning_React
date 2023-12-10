import React from "react";
import { NavLink } from "react-router-dom";

const LandingScreen = () => {
    return (
        <div>
            <h1>This is Landing Page</h1>
            <NavLink to="login">Go to login page</NavLink>
            <br />
            <NavLink to="home">Go to home page</NavLink>
            <br />
            <NavLink to="contact">Go to contact page</NavLink>
            <br />
            <NavLink to="todo" >Go to todo page</NavLink>
            <br />
            <NavLink to="signup">click here to signup</NavLink>
            <br />
            <NavLink to="account">click here to Create Account</NavLink>
            <br />
            <NavLink to="user">click here to User profile</NavLink>
            <br />
            <NavLink to="All">GET All user page</NavLink>
            <br />
            <NavLink to="post">Post user Account Page</NavLink>
            <br />
            <NavLink to="product">Product Page</NavLink>
            <br />
            <NavLink to="node">Node User Page</NavLink>
            <br />
            <NavLink to="crud">Simple CRUD Operation using Node JS</NavLink>
        </div>
    )

}

export default LandingScreen;