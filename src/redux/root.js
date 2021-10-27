import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gamesReducer from "./game-service/reducer";

export const rootReducer = combineReducers({
  gamesRedux: gamesReducer,
});

const composeEnchancers = compose;
const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;
