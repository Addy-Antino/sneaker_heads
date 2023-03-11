import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sneaker-head-1.adityarupdatta.repl.co/api/v1/password/forgot",
        {
          email: email,
        }
      );
      console.log("data is ", response.data);
      if (response.data.success) {
        setEmailSent(true);
        setsuccessMessage(response.data.message);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      const errorText = error.response.statusText;
      switch (error.response.status) {
        case 400:
          toast.error(`The server cannot process request`);
          break;
        case 401:
          toast.error(`User Does Not exist`);
          break;
        case 403:
          toast.error(`the server is refusing to give the requested resource`);
          break;
        case 404:
          toast.error(`The server cannot find the requested resource.`);
          break;
        case 500:
          toast.error(
            `The server has encountered a situation it does not know how to handle.`
          );
          break;
        case 503:
          toast.error(`The server is not ready to handle the request. `);
          break;
        default:
          setErrorMessage(`${errorText}`);
      }
      console.log(errorMessage);
      toast.error(errorMessage);
      // setErrorMessage(
      //   "An error occurred while sending the email. Please try again later."
      // );
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let content;

  if (emailSent) {
    content = (
      <div className="container1 my-font">
        <form>
          <div className="form-group">
            <div>
              <div className="alert alert-success mt-3">{successMessage}</div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    content = (
      <div>
        <ToastContainer />
        <div className="container1 my-font">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Your Registered Email:</label>
              <input
                required
                maxLength="40"
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="btn btn-block btn-lg btn-danger">
                <span className="glyphicon glyphicon-arrow-right"></span> Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }


  
  return content;
}

export default ForgotPassword;