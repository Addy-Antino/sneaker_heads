import { React, useEffect, useState } from "react";
// Importing toastify module
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import "./server.scss";
console.log(useSelector);
// var dummyimage ="https://www.jiomart.com/images/product/600x750/rvrgzpx6xy/robbie-jones-white-sneakers-for-men-product-images-rvrgzpx6xy-0-202209031733.jpg";
function ProductCard({ productData, setproductData }) {
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          "https://sneaker-head-1.adityarupdatta.repl.co/api/v1/products"
        );
        console.log("checking api ", response);
        console.log("modify api cheking", response.data);
        setproductData(response.data.products);
        // console.log(productData[1].description);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);
  function handleProductButtonClick(item, event) {
    console.log("product clicked is", item);

    console.log("event is ", event.price);
    const data = {
      product_id: item._id,
      name: item.title,
      price: item.price,
      quantity: item.quantity,
      email: item.email,
      description: item.description,
      whats_for: event,
      image: item.image.url,
    };
    axios
      .post("https://sneaker-head-1.adityarupdatta.repl.co/api/v1/cart", data)
      .then((response) => {
        console.log("response aya", response.data);
        // Handle successful response from server
        toast.success("Product Added to Cart");
      })
      .catch((error) => {
        console.error("error aayi", error);
        // Handle error from server
      });
  }
  return (
    <>
      {/* &nbsp; */}
      <ImageSlider />
      <MDBContainer>
        <MDBRow className="mb-3 productCard container d-flex justify-content-center">
          <ToastContainer />
          {productData.map((item) => {
            console.log(item.image.url);
            // console.log("hii",item.title)
            return (
              <MDBCol className=" maincontaner  shadow-custom" size={3}>
                <MDBCard className="col-md-auto" style={{ boxShadow: "none" }}>
                  <div class="hover-zoom">
                    <MDBCardImage
                      src={item.image.url}
                      position="top"
                      alt="..."
                    />
                  </div>
                  <MDBCardBody className="cardBody rounded">
                    <MDBCardTitle className="title-font">
                      {item.title}
                    </MDBCardTitle>
                    {item.description} <MDBCardText> {item.price} </MDBCardText>
                    <MDBBtn
                      className="btn-buy btn" style={{float:"left"}}
                      onClick={(event) => handleProductButtonClick(item, "Buy")}
                    >
                      Buy
                    </MDBBtn>
                    <MDBBtn
                      className="btn-danger btn" style={{float:"right"}}
                      onClick={(event) =>
                        handleProductButtonClick(item, "Rent")
                      }
                    >
                      Rent
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}
export default ProductCard;
