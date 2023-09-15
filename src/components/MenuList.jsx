import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const getMenus = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=3&page=${currentPage}`)
      .then((res) => {
        const data = res?.data?.data?.Data;
        setMenus(data);
        setCurrentPage(res.data.data.currentPage);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, [currentPage]);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="flex flex-wrap mb-40 mt-10">
        {menus.map((item, key) => (
          <div
            key={key}
            className="flex flex-col gap-4 text-center mt-5 w-[300px] mx-auto"
          >
            <img src={item.imageUrl} className="h-[200px] mx-auto p-2" />
            <h3 className="font-bold text-red-800">{item.name}</h3>
            <p>{item.description}</p>
            <button
              onClick={() => handleDetail(item.id)}
              className="mx-auto font-bold  w-[150px]"
            >
              Detail
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 gap-5">
        <button
          className="border border-black p-1 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
        {currentPage > 1 && currentPage < 4 ? (
          <button
            className="border border-black p-1 rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev Page
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MenuList;
