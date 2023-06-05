import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import UserDetail from "./components/userDetail";
import Users from "./components/users";
import AdminHome from "./components/adminHome";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        

       
            <Routes>
              <Route exact path="/" element={isLoggedIn=="true" ? <UserDetail /> : <Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetail" element={<UserDetail />} />
              <Route path="/users" element={<Users />} />
              <Route path="/adminHome" element={<AdminHome />} />
            </Routes>
          </div>
      
    </Router>
  );
}

export default App;
