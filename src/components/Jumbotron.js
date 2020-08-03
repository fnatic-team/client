import React from "react";
import styled from "styled-components";

const JumbotronWrapper = styled.div`
    padding: 100px;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(294deg, #006080, #006181 47%, #003648);
`;

function Jumbotron() {
    return (
        <JumbotronWrapper>
            <div className="row m-auto">
                <div className="row">
                    <div className="col-sm">
                        <h2
                            style={{
                                color: "white",
                                fontWeight: "Bold",
                                textAlign: "left",
                            }}
                        >
                            Find World's Best Speaker Experiece
                        </h2>
                        <br />
                        <p style={{ color: "white", textAlign: "left" }}>
                            Semua orang yang membutuhkan publik speaking yang
                            handal dan memiliki pengalaman yang sudah teruji
                            kemampuannya. Disinilah solusinya
                        </p>
                        <button
                            className="btn-lg btn-highlight text-white align-self-center m-3"
                            style={{
                                background: "rgb(255, 107, 84)",
                                padding: "10px 30px 10px 30px",
                            }}
                        >
                            Mulai
                        </button>
                    </div>
                    <div className="col-sm">
                        <img src="https://via.placeholder.com/300" alt="" />
                    </div>
                </div>
            </div>
        </JumbotronWrapper>
    );
}

export default Jumbotron;
