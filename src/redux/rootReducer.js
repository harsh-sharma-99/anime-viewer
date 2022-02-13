import { combineReducers } from "redux";
import animeReducer from "./anime/animeReducer";

const rootReducer = combineReducers({
  animeRed: animeReducer,
});

export default rootReducer;
