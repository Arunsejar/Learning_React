import axios from "axios";
import React, { useState } from "react";

const PostAllUserPage = () => {

    const [registerForm, updateRegisterForm] = useState({
        email: "",
        password: ""
    })

 const getValueFromInput = (event) => {
    //console.log(event.targt.value);
    updateRegisterForm({...registerForm, [event.target.id] : event.target.value});
 }

 const submitRegister = () => {
    //console.log(registerForm);
    const url = "https://reqres.in/api/register";

    axios.post(url, registerForm)
    .then((response) => {
      console.log(Response);
      alert("success - User has been Registered");
    })
    .catch((error) => {
      console.error(error);
      alert("failed - please contact admin");
    })
 }

    return (
        <div>
            <h2>Post User Account</h2>
            <div>
                <label>Enter your Email ID :</label>
                <input id="email" type="text" placeholder="Enter Email" onChange={getValueFromInput}/>
            </div>
            <div>
                <label>Enter your Password :</label>
                <input id="password" type="password" placeholder="Enter Password" onChange={getValueFromInput}/>
            </div>
            <button onClick={() => submitRegister()}>Register</button>
        </div>
    )
}

export default PostAllUserPage;