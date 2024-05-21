import React from 'react';
import './Login.css';
import police from  "../../Components/Assets/Images/police.png";
import citizen from "../../Components/Assets/Images/citizen.png";
import Navbar from "../Nav/Navbar";

const Login = () => {
  return (
    <div>
<div> <div className="navbar"> <Navbar /> </div>
    <div className="container mt-5">
      <div className="row">
        <div className="d-grid gap-2 d-md-block">
          <h2>Login as</h2>
          <img src={police} alt="police" width={80} /> 
          <a className="btn btn-dark btn-lg mt-3 me-3" href="/login-police">Login as Police</a>
          <img src={citizen} alt="citizen" width={80} />
          <a className="btn btn-dark btn-lg mt-3 me-3" href="/login-customer">Login as Citizen</a>
                 
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;
