import { combineReducers } from "redux";
import userReducer from "./Users";
import authorizationReducer from './Authorization'

export default combineReducers({
    user: userReducer,
    authorization:authorizationReducer,
});
