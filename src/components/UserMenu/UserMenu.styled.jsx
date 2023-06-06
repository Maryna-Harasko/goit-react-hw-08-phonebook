import styled from "styled-components"

export const BtnLodOut = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  text-decoration: none;
  width: 120px;
  height: 40px;
  font-size: 24px;
  font-weight: 700;
  background-color: inherit;
  color:  #0ea3de;
  border: 1px solid #3cd1e9;
  border-radius: 10px;
  text-align: center;
  transition: color 400ms ease;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(61, 195, 240, 0.895);
  }
`


export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const TextMenu = styled.span`
  font-size: 32px;
  color:  #0ea3de;
  font-weight: 700;
`