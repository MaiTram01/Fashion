import React from 'react'
import {Navigate} from "react-router-dom";
export default function PrivateRoute({isLogin,children}) {
  return (
     isLogin? children: <Navigate to="/Login"></Navigate>
  )
}
