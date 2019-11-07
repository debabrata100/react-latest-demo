import { combineReducers } from "redux";

import { about } from "./staticReducers";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";

const createReducer = asyncReducers => {
    return combineReducers({
        about,
        router: connectRouter(history),
        ...asyncReducers
    });
};
export default createReducer;
