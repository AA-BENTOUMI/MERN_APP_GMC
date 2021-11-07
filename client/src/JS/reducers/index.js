import { combineReducers } from "redux";
import userReducer from "./user";
import roomReducer from "./room";
import adminReducer from "./admin";
const rootReducer = combineReducers({ userReducer,roomReducer,adminReducer });
export default rootReducer;