import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let user_avtar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSVk1DiBq4Us5qCMhx3ox1UGcFLJyTlUCfg&usqp=CAU";
function Sell() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);
  // const [token1,setToken1] =useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log("name is", name);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleFileInput = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleFormSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("image", image);
    try {
      const response = await axios.post(
        "https://sneaker-head-1.adityarupdatta.repl.co/api/v1/new/product",
        formData
      );
      toast.success("Successfully Added The Product!");
      console.log("Response is ", response);
    } catch (error) {
      console.log("error is", error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="col-md-9 mb-md-0 mb-5 mainSell">
        <div className="loginavtar d-flex justify-content-center">
          <ToastContainer />
          <img src={user_avtar} alt="user" />
        </div>
        <form id="contact-form" onSubmit={handleFormSubmitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="name" className="">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleNameChange}
                  name="name"
                  value={name}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="email" className="">
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={handleEmailChange}
                  name="email"
                  value={email}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <label htmlFor="title" className="">
                  Shoe Title
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={handleTitleChange}
                  name="title"
                  value={title}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/* //for entering the price of the shoes. */}
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="price" className="">
                  Shoe Price
                </label>
                <input
                  placeholder=""
                  onChange={handlePriceChange}
                  type="number"
                  value={price}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="quantity"> Enter Quantity </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={handleQuantityChange}
                  value={quantity}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/* for entering the shoe description */}
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <label htmlFor="message"> Shoe Description </label>
                <textarea
                  type="text"
                  id="message"
                  name="description"
                  onChange={handleDescriptionChange}
                  rows={2}
                  value={description}
                  className="form-control md-textarea"
                />
              </div>
            </div>
          </div>
          <input type="file" name="image" onChange={handleFileInput} />
          <div className="text-center text-md-left">
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Sell;
