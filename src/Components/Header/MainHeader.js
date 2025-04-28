import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css";

export function MainHeader() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Nam",
    code: "",
    image: null,
    price: "",
    oldPrice: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = [...existingProducts, formData];
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    navigate("/");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/add">Add</a>
      </nav>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Dép"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">--Chọn danh mục--</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>

        <div className="form-group">
          <label>Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="XXXXXXX"
            required
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="10000"
            required
          />
        </div>

        <div className="form-group">
          <label>Old price</label>
          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            placeholder="1500"
          />
        </div>

        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}

export default MainHeader;
