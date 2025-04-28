import React, { useEffect, useState } from 'react';
import Card from './Card';

function Reduce() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://680968541f1a52874cdcc82c.mockapi.io/api/products/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Fetch error: ", err));
    }, []);
    const totalPrice = products.reduce((sum, item) => sum + parseFloat(item.price), 0);
    // Số 0 ở đây nếu sản phẩm mà không có giá nào thì sẽ trả về 0 như là mặc định
    return (
        <div id="right-content">
            <h2>All Products (reduce):</h2>
            <div id="products">
                {products.map(item => (
                    <Card
                        key={item.id}
                        name={item.name}
                        img={item.image}
                        category={item.category}
                        price={item.price}
                    />
                ))}
                <div style={{ clear: 'both' }} />
            </div>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default Reduce;
