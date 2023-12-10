import React, { useState } from "react";
import {NavLink} from "react-router-dom"

import "../css/login.css";

const LoginScreen = () => {

    // const [variableName, functionName] = useState(initialValue)
    const [text, updatetext] = useState("")

    let message = "Good Morning";

    let greeting = "Hello All!";


    const displayMessage = () => {
        // alert(greeting);
        alert(text);

    }
    const getValueFromInput = (event) => {
        console.log("IM working");
        console.log(event.target.value);

        updatetext (event.target.value);
    }
    return (
        <div>
            <h1 className="heading">{message}</h1>
            <NavLink to="/home">Go TO HomeScreen</NavLink>
            <br></br>
            <NavLink to="/">Go to landing page</NavLink>
            <br />
            <div>
                <label>Enter your Message</label>
                <input type="text" placeholder="Enter your Message.." onChange={getValueFromInput}/>
            </div>
            <br></br>
            <h2>{message}</h2>
            <h2>{greeting}</h2>
            <h1>{text}</h1>
            <button onClick={() => displayMessage()}>Greeting Message</button>
        </div>
    )
}

export default LoginScreen;