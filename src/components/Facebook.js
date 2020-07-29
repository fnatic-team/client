import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
import styled from "styled-components";


const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  background-color: #3b5998;
  color: white;
`;



function Facebook() {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [errors, setErrors] = useState({});
  // // const handleResponse = (data) => {
  // //   dispatch(getFacebook(data, history));
  // // };

  // const handleError = (error) => {
  //   console.log(errors);

  //   setErrors({ error });
  // };

  return (
    <div>
      <FacebookProvider appId="750715705713173">
        {/* <Login scope="email" onCompleted={handleResponse} onError={handleError}>
          {({ loading, handleClick, error, data }) => ( */}
            <Button >
              {" "}
              <span>Facebook</span>
              {/* {loading ? <span>Loading...</span> : "Login with Facebook"} */}
            </Button>
          {/* )} */}
        {/* </Login> */}
      </FacebookProvider>
    </div>
  );
}

export default Facebook;

//kurang redux-untuk login