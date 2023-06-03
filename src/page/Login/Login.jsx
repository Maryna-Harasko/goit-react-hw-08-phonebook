import { LoginForm } from '../../components/LogInForm/LoginForm'
import { TitleOne } from 'page/Contacts/Contacts.styled'
import React from "react"

export const Login = () =>{
  return(
    <div>
      <TitleOne>Log in</TitleOne>
      <LoginForm/>
    </div>
  )
}