import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import AnimeCard from "./../animeCard/index";

import "./styles.scss";

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
    <div className={rootClassName}>
      <div className={`${rootClassName}_wrapper`}>
        {animeList?.results?.map((anime, idx) => (
          <AnimeCard anime={anime} key={idx} />
        ))}
      </div>
      {loadMore && <CircularProgress color="warning" />}
    </div>
  );
};

export default AnimeCardsList;
