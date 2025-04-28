import React, { useEffect, useState } from "react";
import Card from "./Card";
export default function CombineMRF() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://680968541f1a52874cdcc82c.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch dữ liệu: ", error);
      });
  }, []);
  return (
    <div id="right-content">
      <h2>All Products:</h2>
      <div id="products">
        {products.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            img={item.image}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
      <h2>Drinks Only:</h2>
      <div id="drinks">
        {products
          .filter((item) => item.category === "cute")
          .map((item) => (
            <Card
              key={item.id}
              name={item.name}
              img={item.image}
              category={item.category}
              price={item.price}
            />
          ))}
      </div>
      <h3>
        Total Price of All Products: $
        {products
          .reduce((sum, item) => sum + parseFloat(item.price), 0)
          .toFixed(2)}
      </h3>

      <div style={{ clear: "both" }} />
    </div>
  );
}
