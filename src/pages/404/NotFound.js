import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../assets/images/nf.jpg";
import styled from "styled-components";

const Image = styled.div`
    max-width: 400px;
    img {
        width: 100%;
    }
`;

function NotFound() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
            }}
        >
            <Image>
                <img src={PageNotFound} alt="" />
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                    <Link to="/">Go to Home </Link>
                </p>
            </Image>
        </div>
    );
}

export default NotFound;
