import React, { useState } from "react";

import employeeService from "../services/upload-files.service";
import './upload-Form.css'


const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", selectedFile);

    employeeService
      .upload(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    window.location.reload(false);
  };
  

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees CSV file Upload</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="files"  className="input-group FileUpload"  >
           {selectedFile ? (
            <p className="mtb-2">{selectedFile.name}</p>
                ) : (
            <p className="mtb-2">Select file...</p>
                )}
        </label>
      </div>     
        <input
          type="file"
          id="files"
          name="file"
          accept=".csv"
          style={{ visibility: "hidden" }}
          onChange={handleFileSelect}
        />
        
        <div>
           <input type="submit" value="Upload" className="border border-dark Button" />
        </div>
      </form>
    </div>
  );
};

export default UploadForm;