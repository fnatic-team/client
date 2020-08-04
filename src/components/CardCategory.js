import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 190px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-evenly;
`;

const CardHeader = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

function CardCategory(props) {
  return (
    <CardWrapper>
      <Card className="shadow">
        <CardHeader>
          <img src={props.image} alt="" />
        </CardHeader>
        <p className="text-left font-weight-bold">{props.title}</p>
        <span className="text-left text-secondary">
          {props.tot_speak} Speaker
        </span>
      </Card>
    </CardWrapper>
  );
}

export default CardCategory;
