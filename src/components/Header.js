import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  
  img {
    width: 200px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  flex-wrap: wrap;
  width: 45%;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
`;

const Button = styled.div`
  background-color: orange;
  width: 80px;
  border-radius: 5px;
  padding: 5px;
`;

function Header() {
  return (
    <NavWrapper>
      <Nav className="container-nav">
        <Logo>
          <img src={logo} alt="" />
        </Logo>

        <Menu>
          <span>Browse All Speaker</span>
          <span>Find Speaker</span>
          <span>Find Location</span>
        </Menu>

        <ButtonGroup>
          <Button>Log in</Button>
          <Button>Register</Button>
        </ButtonGroup>
      </Nav>
    </NavWrapper>
  );
}
export default Header;
