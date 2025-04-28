import logo from './logo.svg';
import './App.css';
import Header from '../Header/MainHeader.js';
import Content from '../Content/Display.js';
import Footer from '../Footer/Footer';
import Items from "../Items.js"
import Display from '../Content/Display.js';
import MainHeader from '../Header/MainHeader.js';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Function from '../Function';
// import PrivateRoute from '../PrivateRoute';
// import { useState } from 'react';
// var HomePage = function(){
//   return(
//     <div>
//        <Link to="/Login"><button>Login</button></Link>
//        <Link to="/User"><button>User</button></Link>
//        <Link to="/Function"><button>Function</button></Link>
//        <p>Homepage</p>
//     </div>
//   );
// };
// var Login = function(){
//   return(
//     <div>
//           <Link to="/"><button>HomePage</button></Link>
//        <Link to="/Function"><button>Function</button></Link>
//        <Link to="/User"><button>User</button></Link>
//        <p>Login</p>
//     </div>
//   );
// };
// var User = function(){
//   return(
//     <div>
//        <Link to="/"><button>HomePage</button></Link>
//        <Link to="/Function"><button>Function</button></Link>
//        <Link to="/Login"><button>Login</button></Link>
//        <p>User</p>
//     </div>
//   );
// };
// var Not = function(){
//   return(
//     <div>
//        <p>Not Found</p>
//     </div>
//   );
// };
function App() {
  // const [isLogin, setIsopenModal] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Display />} />
      <Route path="/add" element={<MainHeader />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/Function" element={<Function />} /> */}
        {/* <Route path="*" element={<Not/>} /> */}
        {/* <Route path="/user" element={<PrivateRoute isLogin={isLogin}><User/></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
    // <div id="container">
    // {/* <Header/> */}
    // <Content/>
    // {/* <Footer/>    */}
    // </div>
     // <div style={{
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   gap: '20px',
    //   // justifyContent: 'center',
    //   maxWidth: '900px',
    //   margin: 'auto'
    // }}>
    //   <Card name="Áo hoodie" price="250.000" image="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-anime-2.jpg" />
    //   <Card name="Áo khoác nữ" price="300.000" image="https://nano-ceramic.vn/wp-content/uploads/2024/12/300-hinh-anh-anime-cute-de-thuong-lam-hinh-nen-cuc-chat.jpg" />
    //   <Card name="Quần jean" price="280.000" image="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8" />
    //   <Card name="Váy công sở" price="350.000" image="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-anime-3.jpg" />
    //   <Card name="Giày sneaker" price="500.000" image="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anh-anime-nu-3d-de-thuong.jpg" />
    //   <Card name="Giày sneaker" price="500.000" image="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anh-anime-nu-3d-de-thuong.jpg" />
    //   <Card name="Giày sneaker" price="500.000" image="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anh-anime-nu-3d-de-thuong.jpg" />
    //   <Card name="Giày sneaker" price="500.000" image="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anh-anime-nu-3d-de-thuong.jpg" />
    // </div>
    // <Items width="200px" height="200px" color="yellow" />
);
}

export default App;
