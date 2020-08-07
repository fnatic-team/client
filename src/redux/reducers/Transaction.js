import { GET_TRANSACTION_SPEAKER, GET_TRANSACTION_AUDIENCE,GET_TRANSACTION_DETAIL } from "../actions";

const initialState = {
    speakers: null,
    audience : null,
    transactionDetail:null,
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
            case GET_TRANSACTION_DETAIL:
            return {
                ...state,
                transactionDetail: action.payload,
            };
        default:
            return state;
    }
};

