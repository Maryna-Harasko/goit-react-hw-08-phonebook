import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  z-index: 1100;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  margin: auto;
  background: rgb(127, 221, 252);
  background: rgb(127, 221, 252);
  background: linear-gradient(22deg, #9cdcec 0.96%, rgba(83, 217, 241, 0.963) 48%, rgba(61, 195, 240, 0.895) 100%);
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const PageLink = styled(NavLink)`
  display: flex;
  justify-content:center;
  align-items: center;
  text-decoration: none;
  width: 120px;
  height: 40px;
  font-size: 24px;
  font-weight: 700;
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
