import { useState, useEffect } from "react";
import "./App.css";
import * as trackService from "./services/trackService.js";
import TrackList from "./components/TrackList/TrackList.jsx";
import NowPlaying from "./components/NowPlaying/NowPlaying.jsx";
import TrackForm from "./components/TrackForm/TrackForm.jsx"

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSelect = (track) => {
    setSelected(track);
    setIsFormOpen(false)
  };
  
  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen)
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData)
      if (newTrack.error) {
        throw new Error(newTrack.error)
      }
      setTracks([newTrack, ...tracks])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error);
    }
}

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updateTrack = await trackService.update(formData, trackId);
      if (updateTrack.error) {
        throw new Error(updateTrack.error);
      }
      const updatedTrackList = tracks.map((track) => {
        return track._id !== updateTrack._id ? track : updateTrack;
      });
      setTracks(updatedTrackList);
      setSelected(updateTrack);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDeleteTrack = async (trackId) => {
    try{
    const deletedTrack = await trackService.deleteTrack(trackId)
      
      if (deletedTrack.error) {
        throw new Error(deletedTrack.error)
      }
      setTracks(tracks.filter((track) => {
        return ( 
          track._id !== deletedTrack._id
        )
      }))
      setSelected(null)
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
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
      <TrackList
        tracks={tracks}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm handleAddTrack={handleAddTrack} selected={selected} handleUpdateTrack={handleUpdateTrack} />
      ) : (
          <NowPlaying selected={selected} handleFormView={handleFormView} handleDeleteTrack={handleDeleteTrack} />
      )}
    </>
  );
};

export default App;
