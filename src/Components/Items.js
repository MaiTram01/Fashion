import React from 'react'

export default function Items(props) {
  return (
    // <div>
    //   <div style={{
    //   border: '1px solid gray',
    //   padding: '10px',
    //   borderRadius: '8px',
    //   width: '200px',
    //   boxSizing: 'border-box',
    //   background: '#f9f9f9'
    // }}>
    //   <img src={props.image} alt={props.name} style={{ width: '100%', borderRadius: '8px' }} />
    //   <h3>{props.name}</h3>
    //   <p>Giá: {props.price} VNĐ</p>
    // </div>
    // </div>
    // <div>
    <div style={{
      width: props.width,
      height: props.height,
      background: props.color,
    }}>
    </div>
  )
}
