import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/data");
      setData(response.data);
    };

    fetchData();
  }, []);

  const handleDownload = async (file) => {
    const response = await axios.get(`/api/download/${file.filename}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.filename);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.filename}</td>
              <td>
                <button onClick={() => handleDownload(item)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
