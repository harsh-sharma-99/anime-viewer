import React from "react";
import { useDispatch } from "react-redux";

import { loadMore } from "../../redux/anime/animeActions";

import "./styles.scss";

const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const handlePage = () => {
    dispatch(loadMore());
  };

  return (
    <div className="load-button">
      <button onClick={handlePage}> Load More </button>
    </div>
  );
};

export default LoadMoreButton;
