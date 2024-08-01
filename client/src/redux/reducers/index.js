import { combineReducers } from "redux";

import authReducer from "./auth";
import webListReducer from "./weblist";

export default combineReducers({
    auth: authReducer,
    webList: webListReducer
});