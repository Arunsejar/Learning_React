import React ,{useState}from "react";
import { NavLink } from "react-router-dom";

import "../css/signup.css";
const UserLogin = () => {

    const [loginForm, updateLoginForm] = useState({
        emailfield : "",
        passwordfield : ""
    })

    const getInputValue = (event) => {
        //console.log(event.target.value , event.target.id);
        //dynamicfunctionName({...dynamicVariableName, [event.targget.id]: event.target.value})

        updateLoginForm({...loginForm,[event.target.id] :event.target.value});
    }

    const submitLogin = () => {
        console.log(loginForm);

    }

    return (
        <div>
            <h1>
                User Account Login
            </h1>
            <div className="space">
                <label className="label-width">Enter your Email ID</label>
                <input id="emailfield" type="text" placeholder="Enter email Id" onChange={getInputValue}/>
            </div>
            <div className="space">
                <label className="label-width">Enter Your Password</label>
                <input id="passwordfield" type="password" placeholder="Enter password" onChange={getInputValue}/>
            </div>
            <div className="space">
                <button onClick={() =>submitLogin()}>Login</button>
            </div>
        </div>
    )
}

export default UserLogin;