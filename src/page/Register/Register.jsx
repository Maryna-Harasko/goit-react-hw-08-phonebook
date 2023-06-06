import React from "react"
import { TitleOne } from "page/Contacts/Contacts.styled"
import { RegisterForm } from "components/RegisterForm/RegisterForm"

const Register = () =>{
  return(
    <div>
      <TitleOne>Register</TitleOne>
      <RegisterForm/>
    </div>
  )
}

export default Register;
