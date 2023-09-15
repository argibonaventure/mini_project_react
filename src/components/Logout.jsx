import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
    
  };

  return (
    <div>
      <button className="z-10" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Logout;
