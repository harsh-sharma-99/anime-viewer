import {
  FETCH_ANIME_FAILURE,
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
} from "./animeTypes";

const initialState = {
  loading: false,
  anime: [],
  error: "",
  pageNumber: 1,
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANIME_SUCCESS:
      if (action.payload.pageNumber > 1) {
        return {
          loading: false,
          anime: [...state.anime, ...action.payload.anime],
          error: "",
          pageNumber: action.payload.pageNumber,
        };
      } else {
        return {
          loading: false,
          anime: action.payload,
          error: "",
          pageNumber: 1,
        };
      }

    case FETCH_ANIME_FAILURE:
      return {
        loading: false,
        anime: [],
        error: action.payload,
        pageNumber: 1,
      };
    default:
      return state;
  }
};

export default animeReducer;
