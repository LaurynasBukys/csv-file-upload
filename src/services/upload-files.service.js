import axios from "axios";
// import httpClient from "./http-common";

const getAll = () => {
  return axios.get("http://localhost:8080/employees");
};

const upload = (data) => {
  return axios.post("http://localhost:8080/upload", data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, upload };