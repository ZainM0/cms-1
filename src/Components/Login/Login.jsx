import React from 'react';
import './Login.css';
import police from  "../../Components/Assets/Images/police.png";
import citizen from "../../Components/Assets/Images/citizen.png";

const Login = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Crime Management System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
