import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {  useEffect, lazy} from "react";
import { fetchCurrentUser } from "store/auth/authOperations";
import { NotFound } from "./NotFound/NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { authSelector } from "store/auth/authSelect";
import { PublicRoute } from "./PublicRoute";

const Home = lazy(() => import('../page/Home/Home'));
const Login = lazy(() => import('../page/Login/Login'));
const Register = lazy(() => import('../page/Register/Register'));
const Contacts = lazy(() => import('../page/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.isRefreshing);

  useEffect(()=>{
    dispatch(fetchCurrentUser())
  },[dispatch])

  return (
    <>
    {isRefreshing ? (
      <h1>Loading...</h1>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route
            path="login" 
            element={
              <PublicRoute redirectTo="/contacts" component={<Login/>}/>
              }>
          </Route>
          <Route
            path="register" 
            element={
              <PublicRoute redirectTo="/contacts" component={<Register/>}/>
              }>
          </Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    )}  
    </>
  )
}

export default App;