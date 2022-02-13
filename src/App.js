import { useSelector } from "react-redux";
import "./App.scss";
import AnimeCardsList from "./components/animeCardsList";
import Header from "./components/header/index";
import SearchBox from "./components/searchBox/index";
import LoadMoreButton from "./components/loadMoreButton/index";
import { useState, useEffect } from "react";

function App() {
  const anime = useSelector((state) => state?.animeRed?.anime);
  const [loadFlag, setLoadFlag] = useState(false);
  useEffect(() => {
    if (anime.length) {
      setLoadFlag(true);
    } else {
      setLoadFlag(false);
    }
  }, [anime]);

  return (
    <div className="App">
      <Header />
      <SearchBox />
      <AnimeCardsList />
      {loadFlag && <LoadMoreButton />}
    </div>
  );
}

export default App;
