import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from './components/Navbar/header';
import LeftBar from './components/LeftBar/leftBar';
import RightBar from './components/RightBar/rightBar';
import Feed from './components/Feed/feed';
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Home from "./pages/Home/home";

import { useDispatch } from 'react-redux';


function App() {
  // const user = useSelector(selectUser);
  const user = localStorage.getItem('user');
  console.log(user);
  const isLogedIn = () => {
    return user === null ? false : true;
  }
  // const user = true;
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogedIn() ? (<Navigate to="/home" />) : (
        <Navigate to="/login" />)
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}


export default App;
