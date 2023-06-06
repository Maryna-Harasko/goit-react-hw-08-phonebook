import styled from "styled-components";

export const BtnDelete = styled.button`
  width: 100px;
  height: 36px;
  background-color:  rgba(61, 195, 240, 0.895);;
  color: #0ea3de;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: border 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus{
    border: 1px solid#0ea3de;;
    box-shadow: 0px 1px 7px 1px #373333;
  }
`