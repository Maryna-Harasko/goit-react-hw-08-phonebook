import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "store/auth/authOperations";
import { authSelector } from "store/auth/authSelect";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);

  return(
    <div>
      <span>Hello, {name}!</span>
      <button type="button" onClick={()=>dispatch(logOut())}>Log out</button>
    </div>
  )
}