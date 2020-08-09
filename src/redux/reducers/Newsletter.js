import { GET_NEWSLETTER } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_NEWSLETTER:
            return actions.data;

        default:
            return state;
    }
};
