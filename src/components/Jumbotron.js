import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const JumbotronWrapper = styled.div`
  display: flex;
  justify-content:center;
  margin:30px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  width:80%;
`;

const Section1 =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:50%;`

const Section2=styled.div`
width:50%;
img{
    width:100%;
}`

function Jumbotron() {
  return (
    <JumbotronWrapper>
      <Main>
        <Section1>
          <h1>Find World's Best Speaker Experiece</h1>
          <p>
            Semua orang yang membutuhkan publik speaking yang handal dan
            memiliki pengalaman yang sudah teruji kemampuannya. Disinilah
            solusinya
          </p>
          <div>
          <Button className="btn-lg btn-dark">Mulai</Button>
          </div>
        </Section1>

        <Section2>
          <img src="https://via.placeholder.com/300" />
        </Section2>
      </Main>
    </JumbotronWrapper>
  );
}

export default Jumbotron;
