import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime } from "../../redux/anime/animeActions";
import "./styles.scss";

const rootClassName = "anime-search";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.animeRed.pageNumber);

  useEffect(() => {
    if (pageNumber > 1) {
      dispatch(fetchAnime(search, pageNumber));
    }
  }, [pageNumber]);

  const handleSearch = () => {
    dispatch(fetchAnime(search, 1));
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

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
