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
    console.log(anime, "bef");
    if (anime === []) {
      console.log(anime, "IN");
      setLoadFlag(false);
    } else {
      setLoadFlag(true);
    }
  }, [anime]);
  console.log(loadFlag);
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
