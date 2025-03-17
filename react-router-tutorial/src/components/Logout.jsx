import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')

  };
  return (
    <div>
      <button className="bg-red-400 p-2 rounded-lg cursor-pointer" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
