import React from "react";
import { Link } from "react-router-dom";

export default function UserHome({ userData }) {
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
                <Link className="nav-link" to={"/"}>
                  Home
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
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            Name<h3>{userData.fname}</h3>
            Email <h3>{userData.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
