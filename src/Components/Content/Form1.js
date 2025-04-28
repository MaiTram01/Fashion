// import React, { useState } from "react";

// export default function Form1() {
//   const [name, setName] = useState("");
//   return (
//     <div>
//       <form>
//         <h1>{name}</h1>
//         <label>
//           Enter your name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function Form1() {
//   const [diemToan, setDiemToan] = useState();
//   const [diemLy, setDiemLy] = useState();
//   const [diemTB, setDiemTB] = useState();
//   const [xepLoai, setXepLoai] = useState("");

//   const tinhDiemTB = () => {
//     const tb = (Number(diemToan) + Number(diemLy)) / 2;
//     setDiemTB(tb);
//     if (tb >= 9) {
//       setXepLoai("Xuất Sắc");
//     } else if (tb >= 8) {
//       setXepLoai("Giỏi");
//     } else if (tb >= 7) {
//       setXepLoai("Khá");
//     } else if (tb >= 5) {
//       setXepLoai("Trung Bình");
//     } else {
//       setXepLoai("Yếu");
//     }
//   };
//   return (
//     <div>
//       <form>
//         <div> <label> Điểm Toán: <input type="number" value={diemToan} onChange={(e) => setDiemToan(e.target.value)}/></label>
//         </div>
//         <div><label> Điểm Lý:<input type="number" value={diemLy} onChange={(e) => setDiemLy(e.target.value)}/></label>
//         </div>
//         <button type="button" onClick={tinhDiemTB}> Tính Điểm Trung Bình</button>
//       </form>
//       <div>
//         <h2>Điểm Trung Bình: {diemTB}</h2>
//         <h2>Xếp Loại: {xepLoai}</h2>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Form1.css";

export default function Form1() {
  const [money, setMoney] = useState();
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [result, setResult] = useState("");

  const menuItems = [
    { name: "Cà phê sữa.........", price: 12000 },
    { name: "Cà phê đá...........", price: 10000 },
    { name: "Sting dâu..............", price: 8000 },
    { name: "Trà đá...................", price: 2000 },
  ];

  const handleCheckboxChange = (e, price) => {
    if (e.target.checked) {
      setSelectedPrices([...selectedPrices, price]);
      // Toán tử ... giúp tạo một mảng mới mà không làm thay đổi mảng gốc ví dụ ban đầu sẽ là 10,20 sau đó sẽ là cái price sẽ là 30
    } else {
      setSelectedPrices(selectedPrices.filter((p) => p !== price));
    }
  };

  const handlePurchase = () => {
    const total = selectedPrices.reduce((sum, price) => sum + price, 0);
    if (total > money) {
      setResult("Vui lòng nạp thêm tiền");
    } else {
      setResult(`Số tiền còn dư hiện tại của bạn là ${money - total}đ`);
    }
  };

  return (
    <div>
      <div className="menu-container">
        <h1>MENU</h1>
        <div style={{ marginBottom: "20px" }}>
          <label>
            Nhập số tiền bạn có:
            <input
              type="number"
              value={money}
              onChange={(e) => setMoney(Number(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <label
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  style={{ marginRight: "10px" }}
                  onChange={(e) => handleCheckboxChange(e, item.price)}
                />
                <span>{item.name}</span>
                <span className="price">{item.price}đ</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handlePurchase}
          style={{ marginTop: "20px" }}
        >
          Mua
        </button>
      </div>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}
