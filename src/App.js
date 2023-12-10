import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/home-pages";
import LoginScreen from "./screens/login-pages";
import ContactScreen from "./screens/contact-pages";
import LandingScreen from "./screens/landing-page";
import ToDoScreen from "./screens/Todopage";
import UserLogin from "./screens/user-login";
import AccountCreationPage from "./screens/account-creation";
import UserProfileScreen from "./screens/user-profile";
import GETAllUsersPage from "./screens/get-all-user";
import PostAllUserPage from "./screens/post-user-account";
import GetAllProductPage from "./screens/Get-All-Product";
import NodeUserPage from "./screens/GET-Node-Api";
import CrudOperationPage from "./screens/crud-operation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="todo" element={<ToDoScreen></ToDoScreen>}></Route>
        <Route path="signup" element={<UserLogin></UserLogin>}></Route>
        <Route path="account" element={<AccountCreationPage></AccountCreationPage>}></Route>
        <Route path="user" element={<UserProfileScreen></UserProfileScreen>}></Route>
        <Route path="All" element={<GETAllUsersPage></GETAllUsersPage>}></Route>
        <Route path="post" element={<PostAllUserPage></PostAllUserPage>}></Route>
        <Route path="product" element={<GetAllProductPage></GetAllProductPage>}></Route>
        <Route path="node" element={<NodeUserPage></NodeUserPage>}></Route>
        <Route path="crud" element={<CrudOperationPage></CrudOperationPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
  }

export default App;
