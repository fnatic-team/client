import React from "react";
import styled from "styled-components";
import CardBrowser from "../../components/CardBrowser";

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  max-width: 100%;
  justify-content:space-between;
  margin:40px;
`;

function BrowserSpeaker() {
  return (
    <div>
      <Container>
        <SearchWrapper>
          <input
            className="form-control mr-sm-2 w-25"
            type="search"
            placeholder="Nama Pembicara"
            aria-label="Search"
          />

          <div className="form-group w-25" style={{marginRight:"57px"}}>
            <select className="form-control">
              <option>filter by location</option>
              <option>filter by location</option>
              <option>filter by location</option>
              <option>filter by location</option>
            </select>
          </div>
        </SearchWrapper>
      </Container>

      <Container>
        <Container1>
          <CardBrowser />
          <CardBrowser />
          <CardBrowser />
          <CardBrowser />
          <CardBrowser />
          <CardBrowser />
        </Container1>
      </Container>
    </div>
  );
}

export default BrowserSpeaker;
