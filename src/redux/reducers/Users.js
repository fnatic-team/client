import { GET_FACEBOOK} from "../actions";

const initialState = {
    dataFacebook: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FACEBOOK:
            return {
                ...state,
                dataFacebook: action.payload,
            };
        default:
            return state;
    }
};
