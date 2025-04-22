import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nguyen Van A",
      age: 20,
      address: "Ha Noi",
    };
  }
  increseAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>State</h1>
        <p>Name: {this.state.name}</p>
        <button onClick={this.increseAge}>Bấm vào để tăng tuổi nè</button>
        <p>Age: {this.state.age}</p>
        <p>Address: {this.state.address}</p>
        <h2>Họ tên: {this.state.name}</h2>
      </div>
    );
  }
}
