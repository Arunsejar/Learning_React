import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AccountCreationPage = () => {

    const [accountForm, updateAccountForm] = useState({
        namefield: "",
        emailfield: "",
        passwordfield: "",
        DOBfield: "",
        genderfield: "",
        hobbiesfield: [],
        educationfield: "",
        addressfield: "",

    });

    const getInputValue = (event) => {
        //console.log(event.target.value);
        //dynamicfuctionName({...dynamicVariableName, [event.target.id] : event.target.value})
        if(event.target.id === "hobbiesfield"){
            if(event.target.checked){
                accountForm.hobbiesfield.push(event.target.value);
              }
              else{
                // remove
                const index = accountForm.hobbiesfield.indexOf(event.target.value);
                accountForm.hobbiesfield.splice(index, 1);
              }
        }
        else{
            
            updateAccountForm({...accountForm, [event.target.id] : event.target.value})
        }
    }
    
    const submitAccountForm = () => {
        console.log(accountForm);
    }   
    return (
        <div>
            <h2>Create a New account</h2>
            <div>
                <label>Enter your Name</label>
                <input id="namefield" type="text" placeholder="Enter your Name" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Email Id : </label>
                <input id="emailfield" type="text" placeholder="Enter your Email" onChange={getInputValue} />
            </div>
            <div>
                <label>Enter your Password : </label>
                <input id="passwordfield" type="password" placeholder="Enter your paasword" onChange={getInputValue}/>
            </div>
            <div>
                <label>Select Your DOB  : </label>
                <input id="DOBfield" type="date" onChange={getInputValue} />
            </div>
            <div>
                <label>Select your Gender</label>
                <input id="genderfield" type="radio" name="gender" onChange={getInputValue} value="Male"/>Male
                <input id="genderfield" type="radio" name="gender" onChange={getInputValue} value="Female"/>Female
                <input id="genderfield" type="radio" name="gender" onChange={getInputValue} value="Others"/>Others
            </div>
            <div>
                <label>Select Your Hobbies</label>
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="cricket"/>cricket
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="Cycling"/>Cycling
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="Trecking"/>Trecking
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="Hockey"/>Hockey
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="Chess"/>Chess
                <input id="hobbiesfield" type="checkbox" onChange={getInputValue} value="Football"/>Football
            </div>
            <div>
                <label>Select your Qualification</label>
                <select id="educationfield" onChange={getInputValue}>
                    <option>Please choose any one</option>
                    <option>Higher Secondary</option>
                    <option>Bachelor of Engineering</option>
                    <option>Bachelor of Accounts</option>
                    <option>Bachelor of Literature</option>
                    <option>Bachelor of Commerce</option>
                    <option>Master in Accounts</option>
                    <option>Master in Electrical</option>
                </select>
            </div>
            <div>
                <label>Enter your Address : </label>
                <textarea id="addressfield"placeholder="Enter YOur Address" onChange={getInputValue}></textarea>
            </div>
            <div>
                <button onClick={() =>submitAccountForm()}>Submit</button>
            </div>
        </div>
    )
}

export default AccountCreationPage;
