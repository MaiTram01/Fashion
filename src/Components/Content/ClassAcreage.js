import React, { Component } from 'react';

export default class ClassAcreage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      length: 0,
      area: 0
    };
  }
  handleLengthChange = (e) => {
    this.setState({ length: Number(e.target.value) });
  };

  handleWidthChange = (e) => {
    this.setState({ width: Number(e.target.value) });
  };

  calculateArea = () => {
    const { width, length } = this.state;
    this.setState({ area: width * length });
  };

  render() {
    const { width, length, area } = this.state;

    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h1>Tính diện tích hình chữ nhật</h1>
        <div>
          <label>Chiều dài:</label>
          <input
            type="number"
            value={length}
            onChange={this.handleLengthChange}
          />
        </div>
        <div>
          <label>Chiều rộng:</label>
          <input
            type="number"
            value={width}
            onChange={this.handleWidthChange}
          />
        </div>
        <button onClick={this.calculateArea}>Tính diện tích</button>
        <h2>Diện tích: {area}</h2>
      </div>
    );
  }
}
