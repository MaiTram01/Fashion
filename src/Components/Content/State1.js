import React, { Component } from 'react';
import Data from './Data';

export default class State1 extends Component {
  constructor(props) {
    super(props); 
    var arr = Data(); 
    this.state = { arr }; 
  }
  render() {
    return (
      <div>
        {this.state.arr.map((item, index) => (
          <div key={index}>
            <h1>Tên sản phẩm:{item.name}</h1>
            <img src={item.img}></img>
            <p>Thể loại:{item.category}</p>
            <p>Giá:{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
