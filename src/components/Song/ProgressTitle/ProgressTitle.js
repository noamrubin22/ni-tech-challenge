import React from "react";
import "./ProgressTitle.css";

const ProgressTitle = ({ progressTitle }) => {
  return (
    <div className="title-progress">
      <p>{progressTitle}</p>
    </div>
  );
};

export default ProgressTitle;
