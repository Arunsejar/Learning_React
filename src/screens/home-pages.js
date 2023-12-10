import React from "react";
import {NavLink} from "react-router-dom"

const HomeScreen = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <NavLink to="/contact">Go to Contactpage</NavLink>
        </div>
    )
} 

export default HomeScreen;


// ES5
// function ComponentName(){

// }
// export default ComponentName;


// ES^ - ES2015
// const ComponentName = () => {

// }
// expect default ComponentName;



// naming convention 
// 1. Pascal case - ArunKumar (component Name)
// 2. camel case - arunKumar (variable or function name)
// 3. Snake case - arun_kumar (variable or function name)
// 4. kebab case - arun-kumar (HTML ) 
