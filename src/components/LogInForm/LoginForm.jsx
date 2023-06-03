import React from "react";
import { FormContainer, FormEl, FormLabel, FormInput, FormButton,  } from "components/FormContact/FormContact.styled";

export const LoginForm = () =>{

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    const form = e.currentTarget;
    
    form.reset();
  }

  return(
    <FormContainer>
    <FormEl onSubmit={handleSubmitForm}>
      <FormLabel>
        Email{' '}
        <FormInput
          type="text"
          name="name"
          placeholder="Please enter your email"
        />
      </FormLabel>
      <FormLabel>
        Password{' '}
        <FormInput
          type="password"
          name="password"
          placeholder="Please enter your password"
        />
      </FormLabel>
      <FormButton type="submit">Log In</FormButton>
    </FormEl>
  </FormContainer>
  )
}