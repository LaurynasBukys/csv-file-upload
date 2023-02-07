import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/table";
import UploadForm from "./components/upload-form";

function App() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <UploadForm />
      <br />
      <br />
      <Table />
    </div>
  );
}

export default App;