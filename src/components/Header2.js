import React from "react";
import { Nav, NavbarBrand, NavItem } from "reactstrap";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 80px;
  .navbar {
    width: 80%;
    .logo {
      display: flex;
      align-items: center;
      width: 20%;
      img {
        width: 200px;
      }
    }
  }
`;

function Header2() {
  return (
    <NavWrapper>
      <div className="navbar">
          <div className="navbar-brand logo">
              <img src={logo} alt=""/>
          </div>
          <div className="collapse navbar-collapse menu-grup">
              <ul className="navbar-nav mr-auto menu" >
                  <li className="nav-item active">Browse All Speaker</li>
              </ul>
          </div>
      </div>
    </NavWrapper>
  );
}

export default Header2;
