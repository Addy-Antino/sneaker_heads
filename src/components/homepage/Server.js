import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./ProductCard";
import CardPage from "./CardPage";
import Navbar from "./Navbar";
import "./server.scss";
import Profile from "../loginComponents/Profile";
import Help from "../loginComponents/Help";
import Sell from "../loginComponents/Sell";
import MyOrder from "../loginComponents/MyOrder";
function Server() {
  const [productData,setproductData]=useState([]);
  const [q,setQ] = useState(0);
 

  return (
    <div>
      <BrowserRouter>
      <Navbar q={q} />
        <Routes>
          <Route exact path="/" element={<ProductCard setproductData={setproductData} productData={productData} />} />
          <Route path="/card" element={<CardPage  setQ={setQ} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/MyOrder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Server;
