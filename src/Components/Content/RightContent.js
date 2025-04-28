// import React from 'react'
// import Card from './Card'
// import { Data } from './Data'
// function RightContent() {
//     const products = Data();
//     console.log("Dữ liệu nè"+ products)
//   return (
//     <div>
//         <div id="right-content">
//             <h2>Product : </h2>
//             <div id="products">
//                         {
//                     products.map((item) => {
//                        return <Card name={item.name} img={item.image} category={item.category} price={item.price}/>
//                     })
//                 }
//                 <div style={{clear: 'both'}} />
//             </div>
//             <div style={{clear: 'both'}} />
//         </div>
//     </div>
//   )
// }

// export default RightContent

import React, { useEffect, useState } from 'react'
import Card from './Card'

function RightContent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Gọi API khi component mount
        fetch('https://680968541f1a52874cdcc82c.mockapi.io/api/products/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data); 
            })
            .catch(error => {
                console.error("Lỗi khi fetch dữ liệu: ", error);
            });
    }, []);
    return (
        <div>
            <div id="right-content">
                <h2>Product : </h2>
                <div id="products">
                    {
                        products.map((item) => (
                            <Card
                                key={item.id}
                                name={item.name}
                                img={item.image}
                                category={item.category}
                                price={item.price}
                            />
                        ))
                    }
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        </div>
    )
}
export default RightContent
