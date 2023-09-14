import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";



const MenuList = () => {

    const [menus, setMenus] = useState([]);
    const navigate = useNavigate()

    const getMenus = () => {
        axios
         .get('https://api.mudoapi.tech/menus?perPage=10')
         .then((res)=> {
            const data = res?.data?.data?.Data;
            setMenus(data);
          })

          .catch ((err) =>{
            console.log(err);
          })
        }

        useEffect(()=>{
            getMenus();
        },[]);

        const handleDetail = (id) => {
            navigate(`/detail/${id}`);
        };

    return (
        <div className="flex flex-wrap mb-5">
            {menus.map((item,key) => 
            <div key={key} className="flex flex-col gap-4 text-center mt-5 border border-red-800 w-[300px] mx-auto">
                
                <img src={item.imageUrl} className="w-[200px] mx-auto p-2"/>
                <h3 className="font-bold text-red-800">{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleDetail(item.id)} className="font-bold border border-red-800 ">Detail</button>

            </div>
                )}
         
         
        </div>
    )
};

export default MenuList