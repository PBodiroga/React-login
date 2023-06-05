import React, { useState } from "react";
import '../index.css'

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && adminKey != "123") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      console.log(fname, lname, email, password);
      fetch("http://localhost:3000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Alow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "ok") {
            alert("Registration Successful!");
            window.location.href = "./sign-in";
          } else if (data.status == "User Exists") {
            alert("User with same email exists");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register as:
            <input
            className="radio"
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            User
            <input
            className="radio"
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Admin key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Admin key"
                onChange={(e) => setAdminKey(e.target.value)}
                required
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
