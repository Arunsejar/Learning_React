import React, { useState } from "react";
import {NavLink} from "react-router-dom"


const ContactScreen = () => {

  const [numberForm,updateNumberForm] = useState ({
    namefield: "",
    numberfield : "",
    messagefield :"",
  })

  const getInputValue = (event) => {
    updateNumberForm ({...numberForm ,[event.target.id] : event.target.value })
  }

  const submitLogin = () => {
    console.log(numberForm);
  }
    return (
        <div>
          <h1>Contact Pages</h1>
        <div>
          <label>Enter Your Name :</label>
          <input id="namefield" type="text" placeholder="Enter your name" onChange={getInputValue}/>
        </div>
        <div>
          <label>Enter Your Mobile Number :</label>
          <input id="numberfield" type="number" placeholder="Enter Your Name" onChange={getInputValue}/>
        </div>
        <div>
          <label>Enter Your Message : </label>
          <textarea id="messagefield" placeholder="enter your message" onChange={getInputValue}></textarea>
        </div>
        <div>
          <button onClick={submitLogin}>Submit</button>
        </div>
          <NavLink to="/login">Move to LoginScreen</NavLink>
        </div>
    )
}

export default ContactScreen;