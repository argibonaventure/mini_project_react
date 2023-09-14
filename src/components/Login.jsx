import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {   
   navigate("/")

      const payload = {
      username: username,
      password: password,
    };
    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        console.log(res);
        const token = res.data?.data?.token;
        localStorage.setItem("token", token);    
      })
      .catch((err) => {
        console.log(err);
      })

     
    


  };

  console.log(username, password);

  return (
    <div>
      <div className="grid grid-rows-2 gap-4 p-20">
        <input
          onChange={handleChangeUsername}
          className="rounded"
          type="text"
          placeholder="username"
        />
        <input
          onChange={handleChangePass}
          className="rounded"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="border border-red-800 w-[200px] rounded mx-auto mb-[50px] text-xl text-center bg-red-800 text-white">
        <button onClick={handleSubmit} className="">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Login;
