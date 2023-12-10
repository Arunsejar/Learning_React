import axios from "axios";
import React, { useState } from "react";

const NodeUserPage = () => {

    const [students,updateStudentList] =useState([]);
    const [createForm,updateCreateForm] = useState({
        name:""
    });

 const LoadUser = () =>{
   const url = "http://localhost:5000/api/user/list";
   axios.get(url)
     .then((response) =>{
        updateStudentList(response.data)
     })
     .catch((error) => {
       console.error(error)
     })
 }

 let UserProfileMap = students.map((value,index) => {
    return(
        <tr key={index}>
            <td>
               {value.name}
            </td>
        </tr>
    )
 })

 const getValueInput = (event) => {
    updateCreateForm({...createForm, [event.target.id]: event.target.value})
 }


 const createUserAccount = () => {
    const url = "http://localhost:5000/api/user/create";
    axios.post(url, createForm)
     .then((response) => {
       alert(response.data)
       updateCreateForm({...createForm,name:""});
     })
     .catch((error) => {
        console.log(error)
     })
 }



    return(
        <div>
            <h2>Node User Account</h2>
            <div>
                <label>Enter Your Name</label>
                <input id="name" value={createForm.name} type="text" placeholder="Enter Your Name" onChange={getValueInput}/>
            </div>
            <div>
                <button onClick={() => createUserAccount()}>Create User</button>
            </div>
            <button onClick={() => LoadUser()}>LoadUser</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {UserProfileMap}
            </tbody>
        </table>
        </div>
    )
}

export default NodeUserPage;