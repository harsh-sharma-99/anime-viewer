import {
  FETCH_ANIME_FAILURE,
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
  INCREMENT_COUNT,
} from "./animeTypes";

const initialState = {
  loading: false,
  anime: {},
  error: "",
  pageNumber: 1,
  loadMore: false,
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
          ...state,
          loading: false,
          anime: {
            ...state?.anime,
            results: [...state.anime.results, ...action.payload.anime.results],
          },
          error: "",
          pageNumber: action.payload.pageNumber,
          loadMore: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          anime: action.payload.anime,
          error: "",
          pageNumber: 1,
          loadMore: false,
        };
      }

    case FETCH_ANIME_FAILURE:
      return {
        ...state,
        loading: false,
        anime: [],
        error: action.payload,
        pageNumber: 1,
      };

    case INCREMENT_COUNT:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        loadMore: true,
      };
    default:
      return state;
  }
};

export default animeReducer;
