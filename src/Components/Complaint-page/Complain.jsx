import React, { useState } from "react";
import { firebaseAuth } from "../../Firebase/firebase";
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "firebase/auth";
import axios from "axios";
import Navbar from '../Nav/Navbar';

const Complaint = () => {
  const [crimeTitle, setCrimeTitle] = useState("");
  const [crimeDescription, setCrimeDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("crimeTitle", crimeTitle);
      formData.append("crimeDescription", crimeDescription);
      formData.append("dateTime", dateTime);
      formData.append("policeStation", selectedPoliceStation);

      // Append each file to FormData
      for (let i = 0; i < mediaFiles.length; i++) {
        formData.append("mediaFiles", mediaFiles[i]);
      }

      await axios.post("http://localhost:5000/api/complaints", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Complaint lodged successfully!");
      // Reset form fields after successful submission
      setCrimeTitle("");
      setCrimeDescription("");
      setDateTime("");
      setMediaFiles([]);
      setSelectedPoliceStation("");
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Failed to lodge complaint. Please try again later.");
    }
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setMediaFiles([...mediaFiles, ...files]);
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <legend>Lodge a Complaint</legend>
          </div>

          <div className="mb-3">
            <label htmlFor="crimeTitle" className="form-label">
              Crime Title
            </label>
            <input
              type="text"
              className="form-control"
              id="crimeTitle"
              value={crimeTitle}
              onChange={(e) => setCrimeTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="crimeDescription" className="form-label">
              Crime Description
            </label>
            <textarea
              className="form-control"
              id="crimeDescription"
              rows="4"
              value={crimeDescription}
              onChange={(e) => setCrimeDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="dateTime" className="form-label">
              Date and Time
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="dateTime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mediaFiles" className="form-label">
              Upload Media Files (if any)
            </label>
            <input
              type="file"
              className="form-control"
              id="mediaFiles"
              onChange={handleFileUpload}
              multiple
            />
          </div>
          <div className="mb-3">
            <label htmlFor="policeStation" className="form-label">
              Nearest Police Station
            </label>
            <select
              className="form-select"
              id="policeStation"
              value={selectedPoliceStation}
              onChange={(e) => setSelectedPoliceStation(e.target.value)}
              required
            >
              <option value="">Select Police Station Limits</option>
              <option value="Adugodi Police Station">
                Adugodi Police Station
              </option>
              <option value="Basavanagudi Police Station">
                Basavanagudi Police Station
              </option>
              <option value="Banawadi Police Station">
                {" "}
                Banaswadi Police Station
              </option>
              <option value="Bharathi Nagar Police Station">
                Bharathi Nagar Police Station
              </option>
              <option value="Byappanahalli Police Station">
                Byappanahalli Police Station
              </option>
              <option value="Central Station">Central Station</option>
              <option value="Chickpet Police Station">
                Chickpet Police Station
              </option>
              <option value="Chikkabanavara Police Station">
                {" "}
                Chikkabanavara Police Station
              </option>
              <option value="Cubbon Park Police Station">
                {" "}
                Cubbon Park Police Station
              </option>
              <option value="High Grounds Police Station">
                {" "}
                High Grounds Police Station
              </option>
              <option value="Indiranagar Police Station">
                {" "}
                Indiranagar Police Station
              </option>
              <option value="JC Nagar Police Station">
                {" "}
                JC Nagar Police Station
              </option>
              <option value="RT Nagar Police Station">
                {" "}
                RT Nagar Police Station
              </option>
              <option value="Sadashiva Nagar Police Station">
                {" "}
                Sadashiva Nagar Police Station
              </option>
              <option value="Sampangi Rama Nagara Police Station">
                {" "}
                Sampangi Rama Nagara Police Station
              </option>
              <option value="Vyalikaval Police Station">
                Vyalikaval Police Station
              </option>
              <option value="Wilson Garden Police Station">
                {" "}
                Wilson Garden Police Station
              </option>

              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Lodge Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Complaint;