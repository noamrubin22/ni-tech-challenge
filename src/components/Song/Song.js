import React, { useState, useEffect } from "react";
import "./Song.css";
import SongTitle from "./SongTitle/SongTitle";
import ProgressTitle from "./ProgressTitle/ProgressTitle";
import ProgressIcon from "./ProgressIcon/ProgressIcon";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const Song = ({ releases, songTitle, index, setReleases }) => {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(10);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const useStyles = makeStyles({
    progressBar: {
      width: "100%",
    },
    barColorPrimary: {
      backgroundColor: "#2E2E2E",
    },
    colorPrimary: {
      backgroundColor: "#D6D6D6",
    },
  });

  const classes = useStyles();

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  useEffect(() => {
    if (index === 0) {
      setIsDownloading(true);
    } else {
      setIsDownloading(false);
    }
  });

  const removeDownloadedSong = () => {
    const reducedReleases = releases.filter((release, index) => {
      if (index !== 0) {
        return release;
      }
    });
    setReleases(reducedReleases);
  };

  useEffect(() => {
    if (isDownloading && counter > 0) {
      setMessage(`${counter} seconds remaining`);
      setProgress(100 - counter * 10);
    } else if ((isDownloading && counter === 0) || isDownloaded) {
      setMessage("Downloaded");
      setIsDownloaded(true);
      setProgress(100);
      setTimeout(() => removeDownloadedSong(), 2000);
    } else {
      setMessage("Queued");
    }
  });

  useEffect(() => {
    setCounter(10);
  }, [releases]);

  return (
    <div className="container-song">
      <div className="container-song-column">
        <SongTitle title={songTitle} />
        <ProgressTitle progressTitle={message} />
        <div className="song-progressbar">
          <LinearProgress
            variant="determinate"
            value={progress}
            className={classes.progressBar}
            classes={{
              colorPrimary: classes.colorPrimary,
              barColorPrimary: classes.barColorPrimary,
            }}
          />
        </div>
      </div>
      <ProgressIcon isDownloaded={isDownloaded} />
    </div>
  );
};

export default Song;
