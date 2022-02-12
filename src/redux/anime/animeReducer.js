import {
  FETCH_ANIME_FAILURE,
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
} from "./animeTypes";

const initialState = {
  loading: false,
  anime: [],
  error: "",
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANIME_SUCCESS:
      return {
        loading: false,
        anime: action.payload,
        error: "",
      };
    case FETCH_ANIME_FAILURE:
      return {
        loading: false,
        anime: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default animeReducer;
