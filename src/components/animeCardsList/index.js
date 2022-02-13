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

  if (loadingFlag && !animeList.length) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={`${rootClassName}_wrapper`}>
      <div className={`${rootClassName}`}>
        {animeList?.map((anime) => (
          <AnimeCard anime={anime} />
        ))}
      </div>
      {loadMore && <CircularProgress />}
    </div>
  );
};

export default AnimeCardsList;
