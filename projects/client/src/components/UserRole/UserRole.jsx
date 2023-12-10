import React from 'react'
import { useSelector } from "react-redux";
import axiosInstance from '../../config/api';
const UserRole = () => {
    const userRole = useSelector((state) => state.auth.role);
    const role = axiosInstance(userRole);

  return (
    <div>
      
    </div>
  )
}

export default UserRole
