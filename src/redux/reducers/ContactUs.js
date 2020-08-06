import { GET_CONTACT_US } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_CONTACT_US:
            return actions.data;

        default:
            return state;
    }
};
