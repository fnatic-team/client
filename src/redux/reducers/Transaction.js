import { GET_TRANSACTION_SPEAKER, GET_TRANSACTION_AUDIENCE } from "../actions";

const initialState = {
    speakers: null,
    audience : null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION_AUDIENCE:
            return {
                ...state,
                audience: action.payload,
            };
        case GET_TRANSACTION_SPEAKER:
            return {
                ...state,
                speakers: action.payload,
            };
        default:
            return state;
    }
};

