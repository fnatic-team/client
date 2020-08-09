import { GET_USER_REGISTER } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_USER_REGISTER:
            return actions.data;

        default:
            return state;
    }
};
