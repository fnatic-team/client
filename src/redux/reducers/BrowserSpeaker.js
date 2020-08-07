import {
    GET_DATA_SPEAKERS,
    GET_SPEAKERS_DETAILS,
    GET_SPEAKERS_BY_NAME,
    GET_LOCATIONS,
    GET_SPEAKERS_BY_LOCATION,
} from "../actions";

const initialState = {
    speakers: null,
    selectedSpeaker: null,
    location: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SPEAKERS:
            return {
                ...state,
                speakers: action.payload,
            };
        case GET_SPEAKERS_DETAILS:
            return {
                ...state,
                selectedSpeaker: action.payload,
            };
        case GET_SPEAKERS_BY_NAME:
            return {
                ...state,
                speakers: action.payload,
            };
        case GET_SPEAKERS_BY_LOCATION:
            return {
                ...state,
                speakers: action.payload,
            };
        case GET_LOCATIONS:
            return {
                ...state,
                location: action.payload,
            };
        default:
            return state;
    }
};
