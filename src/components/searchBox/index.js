import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./styles.scss";

const rootClassName = "anime-search";

const SearchBox = () => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__wrapper`}>
        <Select placeholder="Search your favourite anime..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
