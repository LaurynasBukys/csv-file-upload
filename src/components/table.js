import React, { useState, useEffect } from "react";
import employeeService from "../services/upload-files.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css"

const AppTesting = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeesList();
  }, []);

  const getEmployeesList = () => {
    employeeService
      .getAll()
      .then((response) => {
        console.log("Printing the employees data", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container row justify-content-center">
      <table className="table table-striped table-bordered table-responsive w-75">
        {/* <thead style={{ backgroundColor: "darkgrey" }}> */}
        <thead className="Header">
            <tr>
                <th class="align-middle">Name</th>
                <th class="align-middle">Email</th>
                <th class="align-middle">Phone Number</th>
            </tr>  
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} class="align-middle" className="Row">
              <td class="align-middle">{employee.name}</td>
              <td class="align-middle">{employee.email}</td>
              <td class="align-middle">{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTesting;