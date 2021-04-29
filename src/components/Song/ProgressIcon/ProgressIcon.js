import React from "react";
import "./ProgressIcon.css";
import done from "../../../assets/done.svg";
import close from "../../../assets/close.svg";

const ProgressIcon = ({ isDownloaded }) => {
  return <img className="icon" src={isDownloaded ? done : close} />;
};

export default ProgressIcon;
