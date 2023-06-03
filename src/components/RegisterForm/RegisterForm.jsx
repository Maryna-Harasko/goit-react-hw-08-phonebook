import React, { useState } from "react";
import { FormContainer, FormEl, FormLabel, FormInput, FormButton,  } from "components/FormContact/FormContact.styled";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authOperations";

export const RegisterForm = () =>{
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  }

  return(
    <FormContainer>
    <FormEl onSubmit={handleSubmitForm} autoComplete="off">
    <FormLabel>
          Name{' '}
          <FormInput
            type="text"
            name="name"
            placeholder="Please enter name"
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
      <FormLabel>
        Email{' '}
        <FormInput
          type="email"
          name="email"
          placeholder="Please enter your email"
          value={email}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Password{' '}
        <FormInput
          type="password"
          name="password"
          placeholder="Please enter your password"
          value={password}
          onChange={handleChange}
        />
      </FormLabel>
      <FormButton type="submit">Register</FormButton>
    </FormEl>
  </FormContainer>
  )
}