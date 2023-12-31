import React from "react";
import Homepage from "../pages/Homepage";
import MenuPage from "../pages/MenuPage";
import VoucherPage from "../pages/VoucherPage";
import MenuDetail from "../pages/MenuDetail";
import TeamResources from "../pages/TeamResources";
import ProtectedRoute from "./ProtectedRoute";


export const routes = [
    {path:'/', element:<Homepage/>},
    {path:'/menu', element:<MenuPage/>},
    {path:'/voucher', element:<VoucherPage/>},
    {path: '/detail/:menuId', element:<MenuDetail/>},
    {path: '/teamResources', element: <ProtectedRoute><TeamResources/></ProtectedRoute>}
  ];

  
