import React from "react";
import completed from "../../assets/completed.svg";
import "./DownloadsComplete.css";

const DownloadsComplete = () => {
  return (
    <div className="completed">
      <img src={completed} />
      <p>All Downloads Complete</p>
    </div>
  );
};

export default DownloadsComplete;
