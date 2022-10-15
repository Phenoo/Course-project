import React from "react";
import { Navigate } from "react-router-dom";
import {useAuth} from '../context/StateContext'

// receives component and any other props represented by ...rest

const ProtectedRoutes = ({children}) => {
  const {user} = useAuth();
  if(!user){
    return<Navigate to="/login" />
  }
  return children
}

export default ProtectedRoutes