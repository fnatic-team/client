import {
    GET_DATA_SPEAKERS,
    GET_SPEAKERS_DETAILS,
    GET_SPEAKERS_BY_NAME,
    GET_LOCATIONS,
    GET_SPEAKERS_BY_LOCATION,
} from "./types";

export const fetchAllSpeakers = () => async (dispatch) => {
    let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/activeSpeaker`;

    let options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();
    console.log(results);

    dispatch({
        type: GET_DATA_SPEAKERS,
        payload: results,
    });
};

export const getSpeakerDetails = (id) => async (dispatch) => {
    let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/activeSpeaker/${id}`;

    let options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();

    dispatch({
        type: GET_SPEAKERS_DETAILS,
        payload: results,
    });
};

export const searchSpeakerByName = (user, location) => async (dispatch) => {
    if (location === "All Location") {
        return (location = "");
    }
    let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/speakerName/?user=${user}&location=${location}`;

    let options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();
    console.log(results);

    dispatch({
        type: GET_SPEAKERS_BY_NAME,
        payload: results,
    });
};

export const filterLocation = () => async (dispatch) => {
    let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/userLocation`;

    let options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();
    console.log(results);

    dispatch({
        type: GET_LOCATIONS,
        payload: results,
    });
};

export const searchSpeakerByLocation = (location) => async (dispatch) => {
    let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/location/?location=${location}`;

    let options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };

    let response = await fetch(url, options);
    let results = await response.json();
    console.log(results);

    dispatch({
        type: GET_SPEAKERS_BY_LOCATION,
        payload: results,
    });
};

export {
    GET_DATA_SPEAKERS,
    GET_SPEAKERS_DETAILS,
    GET_SPEAKERS_BY_NAME,
    GET_LOCATIONS,
    GET_SPEAKERS_BY_LOCATION,
};
