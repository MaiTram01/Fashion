import React, { Component } from 'react';
import { Data } from './Data'
import Card from './Card'
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
          <Card 
            key={index}
            name={item.name}
            img={item.image}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}
