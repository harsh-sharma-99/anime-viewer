import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import AnimeCard from "./../animeCard/index";

const rootClassName = "anime-list";

const AnimeCardsList = () => {
  const animeList = useSelector((state) => state.anime.anime);
  return (
    <div className={`${rootClassName}`}>
      {animeList?.anime?.map((anime) => (
        <AnimeCard anime={anime} />
      ))}
    </div>
  );
};

export default AnimeCardsList;
