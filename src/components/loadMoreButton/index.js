import React from "react";
import "./styles.scss";
import { loadMore } from "../../redux/anime/animeActions";
import { useDispatch } from "react-redux";

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const handlePage = () => {
    dispatch(loadMore());
  };

  return (
    <div className="load-button">
      <button onClick={handlePage}> Load More ...</button>
    </div>
  );
};

export default LoadMoreButton;
