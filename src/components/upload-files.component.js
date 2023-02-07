import React, { Component } from "react";
import axios from "axios";

class UploadFile extends Component {
  state = {
    file: "",
  };

  componentDidMount = () => {
    const {file} = this.props;
    this.setState({file});
  };

  uploadFile = ({target: {files}}) => {
    console.log(files[0]);
    let data = new FormData();

    data.append("file", files[0]);

    axios.post("http://localhost:8080/upload", data).then((res) => {
      console.log(res);
    });
  };

  render(){
    return (
      <div></div>
    )
  }
}
