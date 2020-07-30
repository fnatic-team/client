import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  .card-img-top {
    width: 150px;
    height: 150px;
  }
`;

const Container = styled.div`
  width: 30%;
  margin-bottom: 20px;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

function CardBrowser() {
  return (
    <Container>
      <CardWrapper>
        <div className="card d-flex" style={{ width: "250px" }}>
          <div>
            <i className="fa fa-2x fa-star" style={{color:"orange"}} aria-hidden="true">
           </i>  <span style={{fontSize:"30px"}}>5</span>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "200px" }}
          >
            <img
              className="card-img-top"
              src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
              alt="Card Cap"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Speaker</h5>
            <p className="card-text">Bio Profile</p>
            <button class="btn btn-sm btn-primary">Detail Profile</button>
          </div>
        </div>
      </CardWrapper>
    </Container>
  );
}

export default CardBrowser;
