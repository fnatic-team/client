import { combineReducers } from "redux";
import userReducer from "./Users";
import authorizationReducer from './Authorization'
import browserSpeakerReducer from "./BrowserSpeaker"


export default combineReducers({
    user: userReducer,
    authorization:authorizationReducer,
    browserSpeaker: browserSpeakerReducer, 
});
