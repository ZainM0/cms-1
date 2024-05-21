import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../Firebase/firebase";

const Complaint = () => {
  const [complaintData, setComplaintData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/complaints"
        );
        setComplaintData(response.data);
      } catch (error) {
        console.error("Error fetching complaint data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Crime Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About Us
                </a>
              </li>
              <li>
                <button
                  className="powerOff"
                  onClick={() => signOut(firebaseAuth)}
                >
                  <FaPowerOff />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {complaintData && (
        <div className="container">
          <legend>Complaint Details</legend>
          <div className="mb-3">
            <label htmlFor="crimeTitle">Crime Title:</label>
            <p id="crimeTitle">{complaintData.crimeTitle}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="crimeDescription">Crime Description:</label>
            <p id="crimeDescription">{complaintData.crimeDescription}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="dateTime">Date and Time:</label>
            <p id="dateTime">{complaintData.dateTime}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="policeStation">Nearest Police Station:</label>
            <p id="policeStation">{complaintData.policeStation}</p>
          </div>

          {complaintData.mediaFiles && (
            <>
              <h3>Media Files</h3>
              <div id="mediaFilesSection">
                {complaintData.mediaFiles.map((file, index) => (
                  <img
                    key={index}
                    src={`data:${file.contentType};base64,${file.data}`}
                    alt={`Media ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <h2>Follow Up</h2>
          <div className="mb-3">
            <label htmlFor="progressUpdate">Progress Update:</label>
            <textarea
              className="form-control"
              id="progressUpdate"
              rows="4"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary" id="submitButton">
            Submit Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Complaint;
