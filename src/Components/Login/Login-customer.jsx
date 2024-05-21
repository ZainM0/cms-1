import React, { useState } from 'react';
import './Login.css';
import citizen from "../../Components/Assets/Images/citizen.png";
import './Login-customer.css';
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { firebaseAuth } from "../../Firebase/firebase";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Nav/Navbar";



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
<div> <div className="navbar"> <Navbar /> </div>
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
