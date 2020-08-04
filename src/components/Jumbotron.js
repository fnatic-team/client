import React from "react";
import hero from "./../assets/images/hero.png";

<<<<<<< HEAD
const JumbotronWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  text-align: left;
`;

const Section2 = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;

function Jumbotron() {
  return (
    <JumbotronWrapper>
      <Main>
        <Section1>
          <p className="h2 mb-4">Find World's Best Speaker Experiece</p>
          <p className="mt-2">
            Semua orang yang membutuhkan publik speaking yang handal dan
            memiliki pengalaman yang sudah teruji kemampuannya. Disinilah
            solusinya
          </p>
          <div>
            <Button className="btn-lg btn-dark">Mulai</Button>
          </div>
        </Section1>

        <Section2>
          <img src="https://via.placeholder.com/300" alt="" />
        </Section2>
      </Main>
    </JumbotronWrapper>
  );
=======


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
                            Semua orang yang membutuhkan publik speaking yang
                            handal dan memiliki pengalaman yang sudah teruji
                            kemampuannya. Disinilah solusinya
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
                        </button></div>
                    </div>
                    <div className="col-sm-4">
                        <img className="img-fluid"src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
>>>>>>> 4dda5584eaa5d4055ecea35f9186179ffa2a14d6
}

export default Jumbotron;
