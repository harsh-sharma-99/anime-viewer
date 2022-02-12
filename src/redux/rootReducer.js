import { combineReducers } from "redux";
import animeReducer from "./anime/animeReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
});

export default rootReducer;
