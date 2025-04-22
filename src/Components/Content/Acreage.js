import React, { useState } from 'react'

export default function Acreage() {
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);
    const [area, setArea] = useState(0);
    const calculateArea = () => {
        setArea(width * length);
    }
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h1>Tính diện tích hình chữ nhật</h1>
        <div>
            <label>Chiều dài:</label>
            <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} />
            {/* Hàm Number() được sử dụng để chuyển đổi giá trị từ chuỗi (string) sang số (number). */}
        </div>
        <div>
            <label>Chiều rộng:</label>
            <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} />
        </div>
        <button onClick={calculateArea}>Tính diện tích</button>
        <h2>Diện tích: {area}</h2>
    </div>
  )
}
