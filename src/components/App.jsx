import { FormContact } from './FormContact/FormContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, TitleOne, TitleTwo } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/contacts/operations';
import { getError, getIsLoading } from '../store/selector';

export const App = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitleOne>Phonebook</TitleOne>
      <FormContact/>
      {isLoading && !error && <b>Please wait...</b>}
      <Filter/>
      <TitleTwo>Contacts</TitleTwo>
      <ContactList/>
    </Container>
  );
};
