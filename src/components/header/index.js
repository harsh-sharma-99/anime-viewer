import React from "react";
import "./styles.scss";
import SearchBox from "./../searchBox/index";

const rootClassName = "anime-header";

const Header = () => {
  return (
    <>
      <div className={rootClassName}>
        <h1>
          Find <span className={`${rootClassName}__alt`}>Animes!</span>
        </h1>
      </div>
      <SearchBox />
    </>
  );
};

export default Header;
