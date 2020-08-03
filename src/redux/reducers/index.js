import { combineReducers } from "redux";
import userReducer from "./Users";

export default combineReducers({
    user: userReducer,
});
