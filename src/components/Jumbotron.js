import React from "react";
import hero from "./../assets/images/hero.png";

function Jumbotron() {
  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)",
        height: "100vh",
      }}
    >
      <div className="row m-auto">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-sm-5 mt-5">
            <h1
              style={{
                color: "white",
                fontWeight: "Bolder",
                textAlign: "left",
              }}
            >
              Find World's Best Speaker Experiece
            </h1>
            <br />
            <p style={{ color: "white", textAlign: "left" }}>
              Semua orang yang membutuhkan publik speaking yang handal dan
              memiliki pengalaman yang sudah teruji kemampuannya. Disinilah
              solusinya
            </p>
            <div className="d-flex align-items-start mt-5">
              <button
                className="btn font-weight-bold rounded-pill btn-lg text-white"
                style={{
                  background: "rgb(255, 107, 84)",
                  padding: "10px 40px 10px 40px",
                }}
              >
                Mulai
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <img className="img-fluid" src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
