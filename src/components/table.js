import React, { useState, useEffect } from "react";
import employeeService from "../services/upload-files.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css"

const EmployeesTable = () => {
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
        <thead key="thead" className="Header">
            <tr>
                <th className="align-middle">Name</th>
                <th className="align-middle">Email</th>
                <th className="align-middle">Phone Number</th>
            </tr>  
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="align-middle Row" >
              <td className="align-middle">{employee.name}</td>
              <td className="align-middle">{employee.email}</td>
              <td className="align-middle">{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;