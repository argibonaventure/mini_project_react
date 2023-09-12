import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const MenuDetail = () => {
  const param = useParams();
  console.log(param.menuId);
  const [menu, setMenu] = useState({});
  const getMenu = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param?.menuId}`)
      .then((res) => {
        setMenu(res?.data?.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  });

  return (
    <div>
      <Navbar/>

      <div className="flex flex-col justify-center border border-black h-[300px] w-[500px] text-center mx-auto mt-[100px] mb-[100px]">
        <h1>{menu?.name}</h1>
        <p>{menu?.description}</p>
        <img src={menu?.imageUrl} className="w-[200px] mx-auto" />
      </div>

      <Footer />
    </div>
  );
};

export default MenuDetail;
