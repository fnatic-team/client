import { GET_AUTHORIZATION } from '../actions/types';

const initialState = {
    authorization: null,

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHORIZATION:
            return {
                ...state,
                authorization: action.payload,
            }
        default:
            return state;
    }
};