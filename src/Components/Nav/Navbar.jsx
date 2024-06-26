import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import { firebaseAuth } from "../../Firebase/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
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
              <li>
                <button className="powerOff" onClick={() => signOut(firebaseAuth)}>
                  <FaPowerOff />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar