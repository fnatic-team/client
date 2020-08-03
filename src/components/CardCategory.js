import React from "react";
import styled from "styled-components";



const CardWrapper=styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Card = styled.div`
display:flex;
flex-direction:column;
width:200px;
height:200px;
padding:30px;
background-color:white;
border-radius:10px;
flex-wrap:wrap;
margin-bottom:20px;
justify-content:space-evenly;`


const CardHeader = styled.div`
display:flex;
img{
    width:30px;
    height:30px;
    border-radius:50%
}`;



function CardCategory() {
  return (
    <CardWrapper>
    <Card className="shadow-lg">
     
      <CardHeader>
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt=""
        />
      </CardHeader>

      
      <h3 style={{fontWeight:"bold"}}>React JS</h3>
      <span className="text-secondary">40 Speaker</span>
  
    </Card>
    </CardWrapper>
  );
}

export default CardCategory;
