import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AuthPage from "./AuthPage";
import Logout from "./Logout";
import Voucher from "./Voucher";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const token = localStorage.getItem("token");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 bg-red-800 sticky top-0 z-10">
      <div className="flex">
        <h1 className="w-full text-3xl font-light text-white italic">
          Le Mudo Café
        </h1>
      </div>
      <ul className="hidden md:flex text-white">
        <Link to={"/"}>
          <li className="p-4">HOME</li>
        </Link>
        <Link to={"/menu"}>
          <li className="p-4">MENU</li>
        </Link>
        <li className="p-4">
          {token ? 
            <div className="flex gap-10">
              <Link to={"/voucher"}>
                <Voucher />
              </Link>
              <Logout />
            </div>
           : 
            <AuthPage />
          }
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} className="text-white" />
        ) : (
          <AiOutlineMenu size={20} className="text-white" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-white bg-red-800 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="w-full flex m-4 md:hidden">
          <h1 className="w-full text-3xl font-light text-white italic m-4">
            Le Mudo Café
          </h1>
        </div>

        <ul className="p-4 uppercase md:hidden">
          <Link to={"/"} ><li className="p-4 border-b border-white text-white">Home</li></Link> 
          <Link to={"/menu"}><li className="p-4 border-b border-white text-white">Menu</li></Link> 
          <li className="p-4 border-b border-white text-white">
            {token ? 
              <div>
                <div className="mr-0 mb-5 border-b border-white border-dashed">
                  <Link to={"/voucher"}><Voucher /></Link> 
                </div>
                <div>
                  <Logout />
                </div>
              </div>
             : 
              <AuthPage />
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
