import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(name, username, password);

  return (
    <div>
      <div className="grid grid-rows-2 gap-4 p-20">
        <input
          onChange={handleChangeName}
          type="text"
          placeholder="name"
          className="rounded"
        />
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
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Registration;
