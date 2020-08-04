import React from "react";
import Rosa from "react-on-scroll-animation"


function Subscribe() {
  return (
    
    <Rosa style={{marginBottom : "100px" ,}} className="container mt-5" animation="fade-down" duration={1000}>
    <form className="row bg-white m-3 border  pad1 shadow-lg">
      <div className="col">
        <div className="icon-box mx-auto">
          <i className="fa fa-3x fa-envelope-open-o m-3"></i>
        </div>
      </div>
      <div className="col m-3 modal-body text-center align-self-center">
        <h4>Subscribe to our newsletter</h4>
        <p>
          Join our subscribers list to get the latest news, updates and special
          offers delivered directly in your inbox.
        </p>
        <div className="col-sm-9 p-3 input-group align-self-center m-auto">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required=""
          />
          <div className="input-group-append">
            <input
              type="submit"
              className="btn btn-primary"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
    </form>
    </Rosa>
  );
}

export default Subscribe;
