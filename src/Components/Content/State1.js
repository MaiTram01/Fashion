import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(props) {
        var arr = getData();
        super(props);
        this.state = {arr}
  render() {
    return (
      <div>
         this.state.arr.map((item, index) =>{
                <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.age}</p>
                    <p>{item.address}</p>
                </div>
      </div>
    )
  }
}
