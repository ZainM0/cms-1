import React, { useContext, useState } from 'react';
import './Login.css';
import './Login-police.css';
import police from  "../../Components/Assets/Images/police.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from "../../Firebase/firebase";

const Login_police = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      alert("Invallid credentials");
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/view-complaint");
  });

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

          <div className="container" id='spacer'></div>

          <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={police} width='150px' alt="" />
    </div>
    <div className="col-md-6">
      <div className="login-form">
        <div className="text">
          LOGIN AS POLICE
        </div>
        <div className='form'>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
          </div>
          <div className="col-md-6 offset-md-3 text-center">
            <button className="btn btn-dark btn-lg mt-3 me-3" href="\view-complaint" onClick={handleLogin} > LOGIN</button>
          </div>
          
          <div className="link">
            Not a member?
            <a href="\signup">Signup now</a>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>

        </div>
      );
    }

export default Login_police;
