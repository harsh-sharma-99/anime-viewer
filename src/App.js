import { useSelector } from "react-redux";
import "./App.scss";
import AnimeCardsList from "./components/animeCardsList";
import Header from "./components/header/index";
import SearchBox from "./components/searchBox/index";
import LoadMoreButton from "./components/loadMoreButton/index";
import { useState, useEffect } from "react";

function App() {
  const anime = useSelector((state) => state?.animeRed?.anime);
  const lastPage = useSelector((state) => state?.animeRed?.anime?.last_page);
  const pageCount = useSelector((state) => state?.animeRed?.pageNumber);
  const loadMore = useSelector((state) => state?.animeRed?.loadMore);
  const [loadFlag, setLoadFlag] = useState(false);

  useEffect(() => {
    if (anime?.results?.length) {
      setLoadFlag(true);
    } else {
      setLoadFlag(false);
    }
  }, [anime]);

  return (
    <div className="App">
      {/* <Header /> */}
      <SearchBox />
      <AnimeCardsList />
      {!loadMore && loadFlag && pageCount < lastPage && <LoadMoreButton />}
    </div>
  );
}

export default App;
