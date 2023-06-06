import styled from "styled-components";

export const FormContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: start;
  font-size: 18px;
`
export const FormInput = styled.input`
  padding-left: 5px;
  height: 36px;
  width: 560px;
  border: 1px solid #3cd1e9;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms ease, box-shadow 250ms ease;

  &::placeholder{
    font-size: 14px;
    padding-left: 5px;
  }

  &:hover,
  &:focus,
  &:active{
    border-color: rgba(61, 195, 240, 0.895);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`
export const FormButton = styled.button`
  width: 200px;
  height: 36px;
  background-color: rgba(61, 195, 240, 0.895);
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