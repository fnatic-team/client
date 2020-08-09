import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchAllSpeakers, searchSpeakerByName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    .card-img-top {
        max-width: 150px;
        max-height: 150px;
    }
    img {
        width: 100%;
        height: 100%;
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

function CardBrowser({ user, location }) {
    const dispatch = useDispatch();
    const dataSpeakers = useSelector((state) => state.browserSpeaker.speakers);

    useEffect(() => {
        if (location === "All Location") {
            dispatch(fetchAllSpeakers());
        }
        if (user !== "" || location !== "") {
            dispatch(searchSpeakerByName(user, location));
        } else {
            dispatch(fetchAllSpeakers());
        }
        //eslint-disable-next-line
    }, [user, location]);

    return (
        <>
            {dataSpeakers !== null ? (
                dataSpeakers.map((data) => {
                    return (
                        <Container key={data._id}>
                            <CardWrapper>
                                <div
                                    className="card d-flex"
                                    style={{ width: "250px" }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ height: "200px" }}
                                    >
                                        <img
                                            className="card-img-top rounded-circle"
                                            src={data.image}
                                            alt="Card Cap"
                                        />
                                    </div>

                                    <div className="card-body">
                                        <div>
                                            <ReactStars
                                                className="card-title d-flex justify-content-center"
                                                count={5}
                                                size={24}
                                                color1={"#ffe234"}
                                            />
                                        </div>
                                        <h5
                                            className="card-title"
                                            style={{
                                                fontFamily:
                                                    "'Montserrat', sans-serif ",
                                            }}
                                        >
                                            {data.name.toTitleCase()}
                                        </h5>

                                        <p className="card-text">
                                            {data.category === "nodejs" ? (
                                                <span class="badge badge-pill badge-success">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            ) : data.category === "reactjs" ? (
                                                <span class="badge badge-pill badge-primary">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            ) : data.category === "angular" ? (
                                                <span class="badge badge-pill badge-danger">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            ) : data.category === "mysql" ? (
                                                <span class="badge badge-pill badge-secondary">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            ) : data.category === "magento" ? (
                                                <span class="badge badge-pill badge-dark">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            ) : (
                                                <span class="badge badge-pill badge-warning">
                                                    {data.category.toTitleCase()}
                                                </span>
                                            )}{" "}
                                            <span class="badge badge-info">
                                                {data.location}
                                            </span>
                                        </p>
                                        <Link to={`/speaker/${data._id}`}>
                                            <button className="btn btn-sm btn-primary">
                                                Detail Profile
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </CardWrapper>
                        </Container>
                    );
                })
            ) : (
                <div className="container-fluid">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>{" "}
                </div>
            )}
        </>
    );
}

export default CardBrowser;
