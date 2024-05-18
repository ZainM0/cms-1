const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/your_database_name';

// Define complaint schema
const ComplaintSchema = new mongoose.Schema({
  crimeTitle: { type: String, required: true },
  crimeDescription: { type: String, required: true },
  dateTime: { type: Date, required: true },
  mediaFiles: { type: [String] }, // Store base64 strings for now
  selectedPoliceStation: { type: String, required: true },
  userId: { type: String, required: true },
});

const Complaint = mongoose.model('Complaint', ComplaintSchema);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const app = express();
app.use(cors()); // Allow CORS for frontend requests

// Configure Multer for image uploads (optional)
const upload = multer({ dest: 'uploads/' }); // Replace with desired storage path

app.post('/api/complaints', upload.none(), async (req, res) => {
  try {
    const { crimeTitle, crimeDescription, dateTime, selectedPoliceStation, userId, mediaFiles } = req.body;

    const newComplaint = new Complaint({
      crimeTitle,
      crimeDescription,
      dateTime: new Date(dateTime), // Parse date string
      selectedPoliceStation,
      userId,
      mediaFiles: JSON.parse(mediaFiles), // Convert back from string
    });

    await newComplaint.save();

    res.json({ message: 'Complaint submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting complaint' });
  }
});

const port = process.env.PORT || 5000;

app.listen
