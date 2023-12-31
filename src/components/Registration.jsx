import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRoleId = (e) => {
    setRoleId(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
      roleId: parseInt(roleId),
    };
    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(name, username, password, roleId);

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
          name="text"
          placeholder="username"
        />
        <input
          onChange={handleChangePass}
          className="rounded"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          onChange={handleChangeRoleId}
          className="rounded"
          name="number"
          min={1}
          max={2}
          type="number"
          placeholder="nomer id (1 = Admin, 2 = Karyawan)"
        />
      </div>
      <div className="border border-red-800 w-[200px] rounded mx-auto mb-[50px] text-xl text-center bg-red-800 text-white">
        <button onClick={handleSubmit} className="z-10">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Registration;
