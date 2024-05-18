import React, { useState } from 'react';
import './Login.css';
import citizen from "../../Components/Assets/Images/citizen.png";
import './Login-customer.css';
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { firebaseAuth } from "../../Firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { FaPowerOff } from "react-icons/fa";



const Login_customer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/complain");
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
                   <img src={citizen} width='150px' alt="" />
                </div>

                <div className="col-md-6">
                    <div className="login-form">
                       <div className="text">
                          LOGIN AS CITIZEN
                       </div>

              <div className='form'>
                 <div className="field">
                    <div className="fas fa-envelope"></div>
                       <input type="text" placeholder="Email or Phone" onChange={(e) => setEmail(e.target.value)}
                value={email}/>
                  </div>
              
                 <div className="field">
                    <div className="fas fa-lock"></div>
                       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                value={password}/>
                 </div>

                 <div className="col-md-6 offset-md-3 text-center">
                    <a className="btn btn-dark btn-lg mt-3 me-3"  onClick={handleLogin}>LOGIN</a>
                 </div>
          
                 <div className="link">
                    Not a member?
                    <a href="\signup" >Signup now</a>
                 </div>
                 </div>
            </div>
            </div>
            </div>
            </div>   
            /</div>
   

  );
}

export default Login_customer;
