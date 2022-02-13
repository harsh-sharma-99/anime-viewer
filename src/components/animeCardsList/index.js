import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import AnimeCard from "./../animeCard/index";
import CircularProgress from "@mui/material/CircularProgress";

const rootClassName = "anime-list";

const AnimeCardsList = () => {
  const animeList = useSelector((state) => state?.animeRed?.anime);
  const loadingFlag = useSelector((state) => state?.animeRed?.loading);
  const loadMore = useSelector((state) => state?.animeRed?.loadMore);

  if (loadingFlag && !Object.keys(animeList).length) {
    return (
      <div>
        <CircularProgress color="success" />
      </div>
    );
  }

  return (
    <div className={`${rootClassName}_wrapper`}>
      <div className={`${rootClassName}`}>
        {animeList?.results?.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </div>
      {loadMore && <CircularProgress color="success" />}
    </div>
  );
};

export default AnimeCardsList;
