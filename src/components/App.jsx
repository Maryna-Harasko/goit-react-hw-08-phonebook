import { Routes, Route } from "react-router-dom"
import { Home } from "page/Home/Home";
import { Login } from "page/Login/Login";
import { Register } from "page/Register/Register";
import { Contacts } from "page/Contacts/Contacts";
import { Layout } from "./Layout/Layout";

export const App = () => {
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