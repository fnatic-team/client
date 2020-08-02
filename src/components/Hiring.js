import React from "react";
import Rosa from "react-on-scroll-animation";

function Hiring() {
  return (
    <Rosa className="container" animation="fade-down" duration={1000}>
      <div className="row bg-white m-3 border  pad1 shadow-lg">
        <div className="col m-3 modal-body text-center align-self-center">
          <h4>Hiring? Audience looking for you</h4>
          <div className="row">
            <div className="col-sm">
              <span>150+</span>
              <p>Speaker</p>
            </div>
            <div className="col-sm">
              <span>40</span>
              <p>Audience</p>
            </div>
            <div className="col-sm">
              <span>20</span>
              <p>Average Day to hire</p>
            </div>
           
          </div>
          <div className="col-sm">
              <button className="btn btn-xs btn-primary">Register</button>
            </div>
        </div>
      </div>
    </Rosa>
  );
}

export default Hiring;
