import React,{useEffect} from "react";
import styled from "styled-components";
import { fetchAllSpeakers } from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"


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

  // eslint-disable-next-line no-extend-native
    String.prototype.toTitleCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

function CardBrowser() {
  const dispatch = useDispatch() 

  const dataSpeakers = useSelector((state) => state.browserSpeaker.speakers)
  
  

  useEffect(() => {
    dispatch(fetchAllSpeakers());
    //eslint-disable-next-line
  }, []);

  return (
    <>
     {dataSpeakers !== null && dataSpeakers.map((data) => {return<Container>
      <CardWrapper key={data._id}>
       
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
              src={data.image}
              alt="Card Cap"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{data.name.toTitleCase()}</h5>
            <p className="card-text">{data.category}</p>
            <Link to = {`/speaker/${data._id}`}>
            <button className="btn btn-sm btn-primary">Detail Profile</button></Link>
          </div>
        </div>
      </CardWrapper>
    </Container>  })}
    </>
  );
}

export default CardBrowser;
