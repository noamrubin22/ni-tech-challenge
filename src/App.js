import React, { useState, useEffect } from "react";
import MainTitle from "./components/MainTitle/MainTitle";
import Song from "./components/Song/Song";
import DownloadsComplete from "./components/DownloadsComplete/DownloadsComplete";
import { ReactSortable } from "react-sortablejs";
import axios from "axios";
import "./App.css";

const App = () => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.discogs.com/artists/72872/releases")
      .then((response) => {
        setReleases(
          response.data.releases.filter((release, index) => {
            if (index < 21) {
              return release;
            }
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <MainTitle />
      {releases.length > 0 ? (
        <ul>
          {/* <ReactSortable list={releases} setList={setReleases}> */}
          {releases &&
            releases.map((song, index) => {
              return (
                <li key={song.id}>
                  <Song
                    releases={releases}
                    songTitle={song.title}
                    index={index}
                    setReleases={setReleases}
                  />
                </li>
              );
            })}
          {/* </ReactSortable> */}
        </ul>
      ) : (
        <DownloadsComplete />
      )}
    </div>
  );
};

export default App;
