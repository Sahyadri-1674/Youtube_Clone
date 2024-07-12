import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";

const initialState = {
  accessToken: "123212",
  user: {
    name: "js kf",
    photoURL: "https://www.googlsefjskjk ej ",
  },
};
const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
