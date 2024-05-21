import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Nav/Navbar';
const ViewComplaint = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB using Axios
    axios.get('/api/complaints')
      .then(response => {
        setComplaints(response.data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <div>
       <div className="navbar">
        <Navbar />
      </div>
      <h1>Complaints</h1>
      <div>
        {complaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <ul>
            {complaints.map(complaint => (
              <li key={complaint._id}>
                <h2>{complaint.crimeTitle}</h2>
                <p>Description: {complaint.crimeDescription}</p>
                <p>Date: {new Date(complaint.dateTime).toLocaleString()}</p>
                <p>Police Station: {complaint.policeStation}</p>
                <div>
                  {complaint.mediaFiles.map((file, index) => (
                    <div key={index}>
                      <p>File {index + 1}</p>
                      <p>Content Type: {file.contentType}</p>
                      {/* Display filename as hyperlink */}
                      <a href={`data:${file.contentType};base64,${file.data}`} target="_blank" rel="noopener noreferrer">
                        {`Download ${file.filename || `File ${index + 1}`}`}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewComplaint;
