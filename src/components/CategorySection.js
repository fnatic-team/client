import React from "react";
import styled from "styled-components";
import CardCategory from "./CardCategory";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

function CategorySection() {
  return (
    <Container>
    <h3>Speaker by Category</h3>
    <Container1>
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
      <CardCategory />
    </Container1>
  </Container>
  );
}

export default CategorySection;
