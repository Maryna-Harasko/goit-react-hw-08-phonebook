import React from "react"
import { TitleOne } from "page/Contacts/Contacts.styled"
import { RegisterForm } from "components/RegisterForm/RegisterForm"

  export const Register = () =>{
    return(
      <div>
        <TitleOne>Register</TitleOne>
        <RegisterForm/>
      </div>
    )
  }
