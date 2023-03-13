import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./payment.scss";
function Payment({ openmodal, setopenmodal }) {
  const [address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState();
  const [pinCode, setPin] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [card_no, setcardvalue] = useState("");
  const hendeladdress = (event) => {
    setAddress(event.target.value);
  };
  const handlecityChange = (event) => {
    setcity(event.target.value);
  };
  const handlestateChange = (event) => {
    setState(event.target.value);
  };
  const handlepinChange = (event) => {
    setPin(event.target.value);
  };
  const handlecountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handlephoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handlechangecard = (e) => {
    setcardvalue(e.target.value);
  };

  const handleFormSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("pinCode", pinCode);
    formData.append("phoneNo", phoneNo);
    formData.append("card_no", card_no);
    try {
      const response = await axios.post(
        "https://sneaker-head-1.adityarupdatta.repl.co/api/v1/order/new",
        formData
      );
      toast.success("Successfully!");
      console.log("Response is ", response);
    } catch (error) {
      console.log("error is", error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div class="modalone">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={() => setopenmodal(!openmodal)}>
              &times;
            </span>
          </div>

          <div className="col-md-12  mb-5">
            <form id="contact-form" onSubmit={handleFormSubmitHandler}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      Address
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={hendeladdress}
                      name="name"
                      value={address}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label>City</label>
                    <input
                      type="text"
                      id="email"
                      onChange={handlecityChange}
                      name="email"
                      value={city}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label>State</label>
                    <input
                      type="text"
                      id="subject"
                      onChange={handlestateChange}
                      name="state"
                      value={state}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label>Country</label>
                    <input
                      placeholder=""
                      onChange={handlecountryChange}
                      type="text"
                      value={country}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="quantity"> Pin Code </label>
                    <input
                      type="text"
                      id="message"
                      name="pinCode"
                      onChange={handlepinChange}
                      value={pinCode}
                      className="form-control md-textarea"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <label htmlFor="message"> Mobile No: </label>
                    <input
                      type="text"
                      id="message"
                      name="phoneNo"
                      onChange={handlephoneChange}
                      value={phoneNo}
                      className="form-control md-textarea"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form">
                    <label htmlFor="message"> Card No: </label>
                    <input
                      type="text"
                      id="message"
                      name="card_no"
                      onChange={handlechangecard}
                      value={card_no}
                      className="form-control md-textarea"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="text-center text-md-left">
                <button type="submit" className="btn btn-primary">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
