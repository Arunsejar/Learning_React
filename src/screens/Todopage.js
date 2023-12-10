import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const ToDoScreen = () => {

    const [textTodo, updateTodo] = useState("");
    const [messageList,updateMessageList] = useState([]);


    
    const getValueFromInput = (event) => {
        updateTodo(event.target.value)
    }
    
    const displayMessage = () => {
        // alert(texttodo);
        //ES5
        //messageList.push(texttodo);
        //updateMessageList(messageList); 

       //ES6 -- ... -> spread operator [...aaray_variable_name , value]
         updateMessageList([...messageList,textTodo]);
         updateTodo("");
    }

    const todoList = messageList.map((value,index) => {
        return(
            <li key={index}>{value}</li>
        )
    })


    return (
        <div>
            <h1>ToDo App</h1>
            <div>
                <label>Enter your Todo Message : </label>
                <input type="text" value={textTodo} placeholder="Enter your Todo message...." onChange={getValueFromInput} />
                <button onClick={() => displayMessage()}>Add</button>
                <ol>
                {todoList}
                </ol>
            </div>
        </div>
    )
}
export default ToDoScreen;