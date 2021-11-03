import { combineReducers } from "redux";
import userReducer from "./user";
import roomReducer from "./room";
const rootReducer = combineReducers({ userReducer,roomReducer });
export default rootReducer;