import { GET_DATA_SPEAKERS, GET_SPEAKERS_DETAILS } from "../actions";

const initialState = {
    speakers: null,
    selectedSpeaker : null,
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
        default:
            return state;
    }
};
