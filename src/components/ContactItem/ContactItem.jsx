import React from "react";
import PropTypes from 'prop-types';
import { BtnDelete } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { removeContacts } from "store/contacts/operations";

export const ContactItem = (props) => {
  const {id, name, number } = props;

  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContacts(id));
  };

  return (
    <>
    {name}: {number}
    <BtnDelete type="button" onClick={deleteContact}>Delete</BtnDelete>
    </>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};