import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
import { Data } from "./Data.js";  // Dữ liệu mặc định ban đầu

export function Display() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Nếu chưa có dữ liệu trong localStorage, lưu dữ liệu từ Data.js vào
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      localStorage.setItem("products", JSON.stringify(Data()));
      setProducts(Data());
    }
  }, []);


  return (
    <div>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/add" className="nav-item">Add</Link>
      </nav>
      <h1 className="title">THỜI TRANG NAM</h1>
      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-category">{item.category}</p>
            <p className="product-price">{item.price}đ</p>
            <button className="buy-button">Đặt mua</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
