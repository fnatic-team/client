import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

const FooterWraper = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  width: 83%;
  margin:30px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  color:white;
  flex-wrap:wrap;
  margin-top:5px;
  img {
    align-self:flex-start;
    width: 200px;
    margin:5px;
  }
`;

const Icon =styled.div`
display:flex;
justify-content:space-evenly;
flex-direction:row;
width:100%;`

function Footer() {
  return (
    <FooterWraper>
      <Container1>
        <Container2>
          <div>
            {" "}
            <img src={logo} alt="" />
          </div>

          <p>An amazing solution for find experienced speaker</p>
          <Icon>
            <i className="fa fa-2x fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-2x fa-youtube-play" aria-hidden="true"></i>{" "}
          </Icon>
        </Container2>
        <Container2>
          <h6>Speaker Seeker</h6>
          <span>Home</span>
          <span>Sign In</span>
          <span>Register</span>
        </Container2>
        <Container2>
          <h6>About</h6>
          <span>Team</span>
        </Container2>
        <Container2>
          <h6>General</h6>
          <span>News</span>
          <span>FAQs</span>
          <span>Contact Us</span>
          <span>Term & Conditions</span>
        </Container2>
      </Container1>
    </FooterWraper>
  );
}

export default Footer;
