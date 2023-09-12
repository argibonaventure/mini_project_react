import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.clear();
    navigate("/menu");
    
  };

  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Logout;
