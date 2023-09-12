import { useEffect, useState } from 'react'
import './index.css'
import { useRoutes } from 'react-router'
import { routes } from './routes/routes';
import axios from 'axios';



export default function App() {


  const element = useRoutes (routes);
  return element;

}

