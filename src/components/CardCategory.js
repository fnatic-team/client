import React from "react";
import styled from "styled-components";

const Card = styled.div`
display:flex;
flex-direction:column;
width:30%;
background-color:white;
border-radius:10px;
flex-wrap:wrap;
margin-bottom:20px;`


const CardHeader = styled.div`
width:100%;
img{
    width:150px;
    height:150px;
    border-radius:50%
}`;



function CardCategory() {
  return (
    <Card>
      <CardHeader>
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt=""
        />
      </CardHeader>

      <h5>React JS</h5>
      <span>40 Speaker</span>
    </Card>
  );
}

export default CardCategory;
