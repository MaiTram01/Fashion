import React from 'react'
import { useNavigate } from "react-router-dom";

const Function = () => {
    const navigate = useNavigate();
  
    const gotToNewPage=()=>{
      navigate("/User");
    }
    return (
      <>
        <h3>Function List</h3>
        <button onClick={() => gotToNewPage()} className="btn">Go to Customer Page</button>
      </>
    );
  };
  export default Function;