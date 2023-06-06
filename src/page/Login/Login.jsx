import { LoginForm } from '../../components/LogInForm/LoginForm'
import { TitleOne, Container } from 'page/Contacts/Contacts.styled'
import React from "react"

const Login = () =>{
  return(
    <Container>
      <TitleOne>Log in</TitleOne>
      <LoginForm/>
    </Container>
  )
}

export default Login;