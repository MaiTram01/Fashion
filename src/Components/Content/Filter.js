import React, { useEffect, useState } from 'react';
import Card from './Card';

function Filter() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://680968541f1a52874cdcc82c.mockapi.io/api/products/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Fetch error: ", err));
    }, []);

    const appear = products.filter(item => item.category === "hansomeboy");

    return (
        <div id="right-content">
            <h2>Drink Products (filter):</h2>
            <div id="products">
                {appear.map(item => (
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
        </div>
    );
}

export default Filter;
