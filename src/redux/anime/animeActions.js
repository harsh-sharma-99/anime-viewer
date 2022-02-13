import axios from "axios";
import {
  FETCH_ANIME_FAILURE,
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
  INCREMENT_COUNT,
} from "./animeTypes";

export const fetchAnimeRequest = () => {
  return {
    type: FETCH_ANIME_REQUEST,
  };
};

export const fetchAnimeSuccess = (payload) => {
  return {
    type: FETCH_ANIME_SUCCESS,
    payload: payload,
  };
};

export const fetchAnimeFailure = (error) => {
  return {
    type: FETCH_ANIME_FAILURE,
    payload: error,
  };
};

export const loadMore = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const fetchAnime = (search, pageNumber = 1) => {
  return (dispatch) => {
    dispatch(fetchAnimeRequest());
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=${search}&limit=16&page=${pageNumber}`
      )
      .then((res) => {
        const anime = res.data;
        const data = { anime, pageNumber };
        dispatch(fetchAnimeSuccess(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchAnimeFailure(errMsg));
      });
  };
};
