import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "store/auth/authOperations";
import { authSelector } from "store/auth/authSelect";
import { AuthWrap, BtnLodOut, TextMenu } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);

  return(
    <AuthWrap>
      <TextMenu>Welcome to your phonebook, {name}!</TextMenu>
      <BtnLodOut type="button" onClick={()=>dispatch(logOut())}>Log out</BtnLodOut>
    </AuthWrap>
  )
}