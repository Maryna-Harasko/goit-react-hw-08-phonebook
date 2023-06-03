import React from "react";
import { FormContainer, FormEl, FormLabel, FormInput, FormButton,  } from "components/FormContact/FormContact.styled";

export const RegisterForm = () =>{

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    const form = e.currentTarget;
    
    form.reset();
  }

  return(
    <FormContainer>
    <FormEl onSubmit={handleSubmitForm}>
    <FormLabel>
          Name{' '}
          <FormInput
            type="text"
            name="name"
            placeholder="Please enter name"
          />
        </FormLabel>
      <FormLabel>
        Email{' '}
        <FormInput
          type="email"
          name="email"
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
      <FormButton type="submit">Register</FormButton>
    </FormEl>
  </FormContainer>
  )
}