import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

const LoadMoreButton = () => {
  const data = useSelector((state) => state);
  const handlePage = () => {};
  console.log(data);
  return (
    <div className="load-button">
      <button onClick={handlePage}> Load More ...</button>
    </div>
  );
};

export default LoadMoreButton;
