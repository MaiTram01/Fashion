// import React from 'react'

// function Card(props) {
//   return (
//     <div>
//         <div className="product">
//             <div className="text">
//                 <div className="p-name"><a href="item.html">{props.name}</a></div>
//             </div>
//             <div className="p-img">
//                 <img src={props.img} width={200} height={200}  alt='sa'/>
//             </div>
//             <div className="text">
//                 <div className="p-cat">{props.category}</div>
//                 <div className="p-price">{props.price}</div>
//                 <input type="button" className="button" name="add" defaultValue="Add to cart" />
//             </div>
//             <div className="clear" />
//         </div>
//     </div>
//   )
// }

// export default Card
import React from 'react'

function Card({ name, img, category, price, link = "#" }) {
  return (
    <div className="product">
      <div className="text">
        <div className="p-name">
          <a href={link}>{name}</a>
        </div>
      </div>
      <div className="p-img">
        <img src={img} width={200} height={200} alt={name} />
      </div>
      <div className="text">
        <div className="p-cat">{category}</div>
        <div className="p-price">{price}</div>
        <input type="button" className="button" name="add" defaultValue="Add to cart" />
      </div>
      <div className="clear" />
    </div>
  )
}

export default Card