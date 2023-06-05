import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    fetch("http://localhost:3000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      fetch("http://localhost:3000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Alow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    }
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
      <div className="auth-wrapper mt-5">
        <div className="auth-inner" style={{ width: "auto" }}>
          <h2>Welcome Admin!</h2>
          <table style={{ width: 500 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Delete</th>
              </tr>
            </thead>

            {data.map((i, _id) => {
              return (
                <tbody>
                  <tr>
                    <td>{i.fname}</td>
                    <td>{i.email}</td>
                    <td>{i.userType}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteUser(i._id, i.fname)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <br />
        </div>
      </div>
    </div>
  );
}
