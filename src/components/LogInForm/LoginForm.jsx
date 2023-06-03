import React, { useState } from "react";
import { FormContainer, FormEl, FormLabel, FormInput, FormButton,  } from "components/FormContact/FormContact.styled";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/auth/authOperations";

export const LoginForm = () =>{
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    dispatch(logIn({email, password}));
    setEmail('');
    setPassword('');
  }

  return(
    <FormContainer>
    <FormEl onSubmit={handleSubmitForm} autoComplete="off">
      <FormLabel>
        Email{''}
        <FormInput
          type="email"
          name="email"
          placeholder="Please enter your email"
          value={email}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Password{''}
        <FormInput
          type="password"
          name="password"
          placeholder="Please enter your password"
          value={password}
          onChange={handleChange}
        />
      </FormLabel>
      <FormButton type="submit">Log In</FormButton>
    </FormEl>
  </FormContainer>
  )
}