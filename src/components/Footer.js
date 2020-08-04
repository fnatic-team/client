import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

const Icon = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
`;

<<<<<<< HEAD
const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 83%;
  margin: 30px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: flex-start;
  color: white;
  flex-wrap: wrap;
  margin-top: 5px;
  img {
    align-self: flex-start;
    width: 200px;
    margin: 5px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

function Footer() {
  return (
    <FooterWraper>
      <Container1>
        <Container2>
          <div>
            {" "}
            <img src={logo} alt="" />
          </div>

          <p className="text-left">
            An amazing solution to find experienced speaker
          </p>
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
=======
function Footer() {
    return (
        <div
            className="container-fluid text-white"
            style={{
                backgroundImage:
                    "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)"
            }}
        >
            <div className="row" style={{ padding: "30px" }}>
                <div className="col-sm">
                    <div>
                        {" "}
                        <img
                            src={logo}
                            alt=""
                            style={{
                                width: "200px",
                            }}
                        />
                    </div>
                    <br />
                    <p>An amazing solution for find experienced speaker</p>
                    <Icon>
                        <i
                            className="fa fa-2x fa-facebook"
                            aria-hidden="true"
                        ></i>
                        <i
                            className="fa fa-2x fa-instagram"
                            aria-hidden="true"
                        ></i>
                        <i
                            className="fa fa-2x fa-youtube-play"
                            aria-hidden="true"
                        ></i>{" "}
                    </Icon>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>Speaker Seeker</h6>
                    <p>Home</p>
                    <p>Sign In</p>
                    <p>Register</p>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>About</h6>
                    <p>Team</p>
                </div>
                <div className="col-sm">
                    <h6 style={{ fontWeight: "bold" }}>General</h6>
                    <p>News</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Term & Conditions</p>
                </div>
            </div>
        </div>
    );
>>>>>>> 4dda5584eaa5d4055ecea35f9186179ffa2a14d6
}

export default Footer;
