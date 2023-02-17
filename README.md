# csv file upload task

- Upload CSV File in React, pass the file to Spring Boot, write the data into H2 memorybase, then fetch the data to React HTML table.
The main goal is to upload employees data to memorybase and get it visualised in a HTML table.
This project consists of two applications: one is a Spring Boot Rest API called  backend-spring-boot (csv-file-upload-springboot) and another is a ReactJS application called frontend-react (csv-file-upload-react). 

## csv-file-upload-springboot

<pre>https://github.com/LaurynasBukys/csv-file-upload-springboot.git</pre>

## csv-file-upload-react

<pre>https://github.com/LaurynasBukys/csv-file-upload.git</pre>

![csv-file-upload](https://user-images.githubusercontent.com/114922274/219022240-fe560891-d463-46d8-9329-3bacfc4f8a7c.png)

### for this project we use H2 database:

- After you start backend application, the table "EMPLOYEES" will be created and you can access your H2 memory db:

<pre>http://localhost:8080/h2-console</pre>

![image](https://user-images.githubusercontent.com/114922274/219024530-dbae0353-ec09-475d-960d-de1f841865f1.png)

- Table EMPLOYEES:

![image](https://user-images.githubusercontent.com/114922274/219024767-8588bb2b-29ea-4348-a17a-f11a5b94aa50.png)

### Backend application

- Navigate in your browser to (or change to port if it is used):
<pre>http://localhost:8080/employees</pre>

### Frontend application

- When you start react application, this will automatically open a new webpage in your default browser or you can manually
navigate in your browser to (change to other port if it is used):
<pre>http://localhost:3000</pre>

### endpoints

- Get list of Employees from database:
<pre>http://localhost:8080/employees</pre>

- Receive uploaded CSV file
<pre>http://localhost:8080/upload</pre>

### Additional Resources

- For testing, added employees.csv file.

<pre>https://github.com/LaurynasBukys/csv-file-upload-springboot/blob/18281ab95de44bacd2d52f5f05c67f5bc41adce5/CsvFileUpload/src/main/resources/employees.csv</pre>
