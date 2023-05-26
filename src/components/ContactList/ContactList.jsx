import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList, ListItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from "store/selector";

export const ContactList = ( ) => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ContactsList>
      {filteredContacts().map((contact) => (
        <ListItem key={contact.id}>
        <ContactItem 
        id={contact.id}
        name={contact.name}
        number={contact.number}
        />
        </ListItem>
      ))}
    </ContactsList>
  )
}
