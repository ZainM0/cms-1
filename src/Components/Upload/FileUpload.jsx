import React, { useState } from "react";
import { storage, firestore } from "../../Firebase/firebase";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef
        .put(file)
        .then(() => {
          console.log("File uploaded successfully");
          // You can add additional logic here, like storing metadata in Firestore
        })
        .catch((error) => {
          console.error("Error uploading file: ", error);
        });
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default FileUpload;
