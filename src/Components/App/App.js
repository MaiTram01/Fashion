import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
// import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<Login />} />
    //     {/* <Route path="/user" element={<User />} /> */}
    //     <Route path="/Function" element={<Function />} />
    //     <Route path="*" element={<Not/>} />
    //     <Route path="/user" element={<PrivateRoute isLogin={isLogin}><User/></PrivateRoute>} />
    //   </Routes>
    // </BrowserRouter>
    <div id="container">
    <Header/>
    <Content/>
    <Footer/>   
</div>
);
}

export default App;
