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
        <div className="flex flex-col">
            {menus.map((item,key) => 
            <div key={key} className="flex flex-col gap-4 text-center mt-5 border border-black w-[300px] mx-auto">
                
                <img src={item.imageUrl} className="w-[200px] mx-auto p-2"/>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleDetail(item.id)} className="font-bold">Detail</button>

            </div>
                )}
         
         
        </div>
    )
};

export default MenuList