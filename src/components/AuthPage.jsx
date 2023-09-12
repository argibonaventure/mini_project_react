import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Modal } from "flowbite-react";

const AuthPage = () => {
  const [showAuthPage, setShowAuthPage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleModalAuthPageClose = () => {
    setShowAuthPage(false);
  };

  const handleLogin = () => {
    setShowLogin(true);
    setShowAuthPage(false);
  };

  const handleModalLoginClose = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <button onClick={() => setShowAuthPage(true)}>MEMBERSHIP</button>

      <Modal
        className="w-full h-full py-20"
        show={showAuthPage}
      >
        <div className="p-2">
          <AiOutlineClose
            className="text-xl"
            onClick={handleModalAuthPageClose}
          ></AiOutlineClose>
        </div>
        <div>
          <Registration />

          <p className="text-center mb-4">
            {" "}
            Already have an account ?{" "}
            <button className="text-red-800" onClick={handleLogin}>
              Sign In Here !
            </button>{" "}
          </p>
        </div>
      </Modal>

      <Modal
        className="w-full h-full py-20"
        show={showLogin}
        handleClose={() => setShowLogin(false)}
      >
        <div className="p-2">
          <AiOutlineClose
            className="text-xl"
            onClick={handleModalLoginClose}
          ></AiOutlineClose>
        </div>

        <Login />
      </Modal>
    </div>
  );
};

export default AuthPage;
