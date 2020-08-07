import { combineReducers } from "redux";
import userReducer from "./Users";
import authorizationReducer from './Authorization'
import browserSpeakerReducer from "./BrowserSpeaker"
import transactionReducer from "./Transaction"


export default combineReducers({
    user: userReducer,
    authorization:authorizationReducer,
    browserSpeaker: browserSpeakerReducer, 
    transaction: transactionReducer
});
