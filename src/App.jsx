import { useState, useEffect } from "react";
import "./App.css";
import * as trackService from "./services/trackService.js";
import TrackList from "./components/TrackList/TrackList.jsx";
import NowPlaying from "./components/NowPlaying/NowPlaying.jsx";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (track) => {
    setSelected(track);
  };
  
  useEffect( () => {
    const fetchTracks = async () => {
      try {
        const tracksData = await trackService.index();
        if (tracksData.error) {
          throw new Error(tracksData.error)
        }
        setTracks(tracksData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchTracks()
  },[])

  return (
    <>
      <h1>JukeBox</h1>
      <TrackList tracks={tracks} handleSelect={handleSelect} />
      <NowPlaying selected={selected} />
    </>
  );
};

export default App;
