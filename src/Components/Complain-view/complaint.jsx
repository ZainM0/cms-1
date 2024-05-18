import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from '../../Firebase/firebase';

const complaint = () => {
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

          <legend>Complaint Details</legend>
<div class="mb-3">
  <label for="crimeTitle">Crime Title:</label>
  <p id="crimeTitle"></p>
</div>
<div class="mb-3">
  <label for="crimeDescription">Crime Description:</label>
  <p id="crimeDescription"></p>
</div>
<div class="mb-3">
  <label for="dateTime">Date and Time:</label>
  <p id="dateTime"></p>
</div>
<div class="mb-3">
  <label for="policeStation">Nearest Police Station:</label>
  <p id="policeStation"></p>
</div>

<h3>Media Files</h3>
<div id="mediaFilesSection">
  </div>

<h2>Follow Up</h2>
<div class="mb-3">
  <label for="progressUpdate">Progress Update:</label>
  <textarea class="form-control" id="progressUpdate" rows="4"></textarea>
</div>
<button type="button" class="btn btn-primary" id="submitButton">Submit Update</button>


    </div>
  )
}

export default complaint