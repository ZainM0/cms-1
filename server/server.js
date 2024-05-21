const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer'); // For handling file uploads
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; 
const dbName = 'CMS';// Define the name of the desired database

// Middleware
app.use(cors());
app.use(express.json());

const dbURI = 'mongodb+srv://adnaan:adnaan420@cms-cluster0.stv241q.mongodb.net/?retryWrites=true&w=majority&appName=CMS-Cluster0'; // Replace with your connection string

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB database connected');
});

// Define a schema for Complaint documents
const complainSchema = new mongoose.Schema({
    crimeTitle: String,
    crimeDescription: String,
    dateTime: Date,
    mediaFiles: [{ data: Buffer, contentType: String }], // Store binary data for media files
    policeStation: String,
});

// Define a model for the Complaint schema
const Complaint = mongoose.model('Complaint', complainSchema);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle form submissions from Complaint.jsx
app.post('/api/complaints', upload.array('mediaFiles', 10), async (req, res) => {
    try {
        const { crimeTitle, crimeDescription, dateTime, policeStation } = req.body;
        const mediaFiles = req.files;
        
        // Convert media files to array of { data, contentType }
        const mediaFilesData = mediaFiles.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
        }));
        // Create a new Complaint document
        const newComplaint = new Complaint({
            crimeTitle,
            crimeDescription,
            dateTime,
            mediaFiles: mediaFilesData,
            policeStation,
        });

        // Save the new Complaint document to the database
        await newComplaint.save();

        res.status(201).json({ message: 'Complaint lodged successfully' });
    } catch (error) {
        console.error('Error submitting complaint:', error);
        res.status(500).json({ message: 'Failed to lodge complaint. Please try again later.' });
    }
});

// Add the following route to handle admin updates for complaints
app.post('/api/complaints/:id/update', async (req, res) => {
    try {
        const id = req.params.id;
        const { updateText } = req.body;
        
        // Find the complaint by ID and update its updates array
        const updatedComplaint = await Complaint.findByIdAndUpdate(id, {
            $push: { updates: updateText }
        }, { new: true });
        
        res.status(200).json(updatedComplaint);
    } catch (error) {
        console.error('Error updating complaint:', error);
        res.status(500).json({ message: 'Failed to update complaint. Please try again later.' });
    }
});


// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));

// // Route to retrieve complaint data
// app.get('/api/complaints', async (req, res) => {
//     try {
//         const complaints = await Complaint.find(); // Fetch all complaints from the database
//         res.status(200).json(complaints);
//     } catch (error) {
//         console.error('Error fetching complaints:', error);
//         res.status(500).json({ message: 'Failed to fetch complaints. Please try again later.' });
//     }
// });


// // Route to retrieve complaint data
// app.get('/api/complaints/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const complaint = await Complaint.findById(id);
//         if (!complaint) {
//             return res.status(404).json({ message: 'Complaint not found' });
//         }
//         res.status(200).json(complaint);
//     } catch (error) {
//         console.error('Error fetching complaint data:', error);
//         res.status(500).json({ message: 'Failed to fetch complaint data. Please try again later.' });
//     }
// });

