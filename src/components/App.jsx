import { Routes, Route } from "react-router-dom"
import { Home } from "page/Home/Home";
import { Login } from "page/Login/Login";
import { Register } from "page/Register/Register";
import { Contacts } from "page/Contacts/Contacts";
import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "store/auth/authOperations";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCurrentUser())
  },[dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
    </>
  )
}