import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../../redux/anime/animeActions";
import "./styles.scss";

const rootClassName = "anime-search";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const anime = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnime());
  }, []);
  const handleSearch = () => {
    dispatch(fetchAnime());
  };
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(anime, "search");
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <input
          type="text"
          value={search}
          placeholder="Search anime ..."
          onChange={(e) => handleInputChange(e)}
        />

        <button onClick={handleSearch} className={`${rootClassName}__button`}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
