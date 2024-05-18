import React, { useState } from 'react';
// import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import ComplaintModel from './complaintModel';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firebaseAuth } from '../../Firebase/firebase'; // Import your Firebase configuration
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { axios } from 'axios';
import {Complaint } from 'server/server.jsx'

const Complain = () => {
  const [crimeTitle, setCrimeTitle] = useState('');
  const [crimeDescription, setCrimeDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [mediaFiles, setMediaFiles] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setMediaFiles(files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('crimeTitle', crimeTitle);
      formData.append('crimeDescription', crimeDescription);
      formData.append('dateTime', dateTime);
      formData.append('selectedPoliceStation', selectedPoliceStation);
      formData.append('userId', firebaseAuth.currentUser.uid);

      const imagePromises = mediaFiles.map(async (file) => {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
          reader.onload = (event) => resolve(event.target.result);
          reader.onerror = reject;
          reader.readAsDataURL(file); // Convert image to base64
        });
      });

      const imageData = await Promise.all(imagePromises);

      formData.append('mediaFiles', JSON.stringify(imageData)); // Store base64 strings in an array

      const response = await axios.post('/server/complaints', {  //ERRING LINE LEARN THIS
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.message === 'Complaint submitted successfully!') {
        console.log('Complaint submitted successfully!');
        // Reset form fields
        setCrimeTitle('');
        setCrimeDescription('');
        setDateTime('');
        setMediaFiles([]);
        setSelectedPoliceStation('');
      } else {
        console.error('Error submitting complaint:', data.message);
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

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

      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <legend>Lodge a Complaint</legend>
          </div>

          <div className="mb-3">
            <label htmlFor="crimeTitle" className="form-label">Crime Title</label>
            <input type="text" className="form-control" id="crimeTitle" value={crimeTitle} onChange={(e) => setCrimeTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="crimeDescription" className="form-label">Crime Description</label>
            <textarea className="form-control" id="crimeDescription" rows="4" value={crimeDescription} onChange={(e) => setCrimeDescription(e.target.value)} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="dateTime" className="form-label">Date and Time</label>
            <input type="datetime-local" className="form-control" id="dateTime" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="mediaFiles" className="form-label">Upload Media Files (if any)</label>
            <input type="file" className="form-control" id="mediaFiles" onChange={handleFileUpload} multiple />
          </div>
          <div className="mb-3">
            <label htmlFor="policeStation" className="form-label">Nearest Police Station</label>
            <select className="form-select" id="policeStation" value={selectedPoliceStation} onChange={(e) => setSelectedPoliceStation(e.target.value)} required>
              <option value="Adugodi Police Station">Adugodi Police Station</option>
              <option value="Basavanagudi Police Station">Basavanagudi Police Station</option>
              <option value="Banawadi Police Station">Banaswadi Police Station</option>
              <option value="Bharathi Nagar Police Station">Bharathi Nagar Police Station</option>
              <option value="Byappanahalli Police Station">Byappanahalli Police Station</option>
              <option value="Central Station">Central Station</option>
              <option value="Chickpet Police Station">Chickpet Police Station</option>
              <option value="Chikkabanavara Police Station">Chikkabanavara Police Station</option>
              <option value="Cubbon Park Police Station">Cubbon Park Police Station</option>
              <option value="High Grounds Police Station">High Grounds Police Station</option>
              <option value="Indiranagar Police Station">Indiranagar Police Station</option>
              <option value="JC Nagar Police Station">JC Nagar Police Station</option>
              <option value="RT Nagar Police Station">RT Nagar Police Station</option>
              <option value="Sadashiva Nagar Police Station">Sadashiva Nagar Police Station</option>
              <option value="Sampangi Rama Nagara Police Station">Sampangi Rama Nagara Police Station</option>
              <option value="Vyalikaval Police Station">Vyalikaval Police Station</option>
              <option value="Wilson Garden Police Station">Wilson Garden Police Station</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Lodge Complaint</button>



        </form>
      </div>
    </div>
  );
};

export default Complain;
