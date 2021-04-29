import React from "react";
import "./SongTitle.css";

const SongTitle = ({ title }) => {
  return (
    <div className="title-song">
      <p>{title}</p>
    </div>
  );
};

export default SongTitle;
