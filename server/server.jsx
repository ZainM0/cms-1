const express = require('express');
const connectDB = require('./db');
const Complaint = require('./complaintModel');  // Import the model

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());  // Parse incoming JSON data

// Route to handle complaint submission
app.post('/api/complaints', async (req, res) => {
  try {
    const { crimeTitle, crimeDescription, dateTime, mediaFiles, selectedPoliceStation, userId } = req.body;

    const newComplaint = new Complaint({
      crimeTitle,
      crimeDescription,
      dateTime,
      mediaFiles,  // Assuming you have logic to store media URLs
      selectedPoliceStation,
      userId,
    });

    const savedComplaint = await newComplaint.save();

    res.status(201).json({ message: 'Complaint submitted successfully!', complaint: savedComplaint });
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
