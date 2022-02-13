import React from "react";
import "./styles.scss";

const rootClassName = "anime-viewer-card";

const AnimeCard = ({ anime }) => {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__image`}>
        {anime.image_url ? (
          <img src={anime.image_url} alt="Anime art" />
        ) : (
          <div>No Image</div>
        )}
      </div>
      <div className={`${rootClassName}__title`} title={anime.title}>
        {anime.title}
      </div>
    </div>
  );
};

export default AnimeCard;
