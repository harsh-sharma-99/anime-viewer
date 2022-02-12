import axios from "axios";
import {
  FETCH_ANIME_FAILURE,
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
} from "./animeTypes";

export const fetchAnimeRequest = () => {
  return {
    type: FETCH_ANIME_REQUEST,
  };
};

export const fetchAnimeSuccess = (anime) => {
  return {
    type: FETCH_ANIME_SUCCESS,
    payload: anime,
  };
};

export const fetchAnimeFailure = (error) => {
  return {
    type: FETCH_ANIME_FAILURE,
    payload: error,
  };
};

export const fetchAnime = (search) => {
  console.log(search);
  return (dispatch) => {
    dispatch(fetchAnimeRequest());
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=16`)
      .then((res) => {
        const anime = res.data.results;
        dispatch(fetchAnimeSuccess(anime));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchAnimeFailure(errMsg));
      });
  };
};
