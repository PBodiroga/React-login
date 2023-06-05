import React from "react";
import { Link } from "react-router-dom";


export default function AdminHome() {
  
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-brand">Book Base</div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/adminHome"}>
                 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/users"}>
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={logOut} className="btn btn-warning">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    
    </div>
  );
}
