import React, { useEffect } from "react";
import styled from "styled-components";
import {
    fetchAllSpeakers,
    searchSpeakerByName,
    searchSpeakerByLocation,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

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

function CardBrowser({ user, location }) {
    const dispatch = useDispatch();
    const dataSpeakers = useSelector((state) => state.browserSpeaker.speakers);

    useEffect(() => {

        dispatch(fetchAllSpeakers(props.input));
        if (user !== "") {
            dispatch(searchSpeakerByName(user));
        } else if (location !== "") {
            dispatch(searchSpeakerByLocation(location));
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
                                        <h5 className="card-title">
                                            {data.name.toTitleCase()}
                                        </h5>
                                        <p className="card-text">
                                            {data.category}
                                        </p>
                                        <Link
                                            exact
                                            path
                                            to={`/speaker/${data._id}`}
                                        >
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
