import React, { useState } from 'react';
import './Signup.css'; // Assuming you have defined styles for the glow effect in Signup.css
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../Firebase/firebase";
import Navbar from "../Nav/Navbar";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {

    if (currentUser) navigate("/");
  });

  return (
<div> <div className="navbar"> <Navbar /> </div>

      <div className="mt-5"></div> {/* Add margin-top to create space between navbar and signup section */}
      <div className="mt-5"></div> {/* Add margin-top to create space between navbar and signup section */}

      <div className="login-form mt-5"> {/* Add margin-top to create space between navbar and signup section */}
        <div className="text">
          SIGN UP
        </div>
        <div className='form'>
          {/* <div className="field">
            <div className="fas fa-user"></div>
            <input type="text" placeholder="First Name" className="name-input"/>
          </div>
          <div className="field">
            <div className="fas fa-user"></div>
            <input type="text" placeholder="Last Name" className="name-input"/>
          </div> */}
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input type="text" placeholder="Email or Phone" className="email-input"  onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              } name="email"
              value={formValues.email}/>
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input type="password" placeholder="Password" className="password-input"   onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                } name="password"
                value={formValues.password}/>
          </div>
          <button className="mt-3" onClick={handleSignIn}>SIGN UP</button>
          </div>
      </div>
    </div>
  );
}

export default Signup;
