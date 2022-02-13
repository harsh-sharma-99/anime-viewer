import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import AnimeCardsList from "./components/animeCardsList";
import SearchBox from "./components/searchBox/index";
import LoadMoreButton from "./components/loadMoreButton/index";

import "./App.scss";

const rootClassName = "anime-viewer";

function App() {
  const [loadFlag, setLoadFlag] = useState(false);
  const anime = useSelector((state) => state?.animeRed?.anime);
  const lastPage = useSelector((state) => state?.animeRed?.anime?.last_page);
  const pageCount = useSelector((state) => state?.animeRed?.pageNumber);
  const loadMore = useSelector((state) => state?.animeRed?.loadMore);

  const showLoadMoreButton = !loadMore && loadFlag && pageCount < lastPage;

  useEffect(() => {
    if (anime?.results?.length) {
      setLoadFlag(true);
    } else {
      setLoadFlag(false);
    }
  }, [anime]);

  return (
    <div className={rootClassName}>
      <SearchBox />
      <AnimeCardsList />
      {showLoadMoreButton && <LoadMoreButton />}
    </div>
  );
}

export default App;
