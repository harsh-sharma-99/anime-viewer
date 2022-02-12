import React from "react";
import "./styles.scss";

const rootClassName = "anime-viewer-card";

const AnimeCard = ({ anime }) => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__image`}>
        {anime.image_url !== "N/A" ? (
          <img src={anime.image_url} alt="display pic" />
        ) : (
          <h1>No Image</h1>
          //   <img src={NoImg} alt="no pic" />
        )}
      </div>
      <div className={`${rootClassName}__title`} title={anime.title}>
        {anime.title}
      </div>
    </div>
  );
};

export default AnimeCard;
