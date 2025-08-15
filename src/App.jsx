import { useState, useEffect } from 'react'
import './App.css'
import * as trackService from "./services/trackService"
import TrackList from "./components/TrackList/TrackList"



const App = () => {
  const [tracks,setTracks] = useState([])

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index()
        if (fetchedTracks.error) {
          throw new Error(fetchedTracks.error)
        }
        setTracks(fetchedTracks)
      } catch (error) {
        console.log(error)
      }
    };
    fetchTracks()
  }, []);






  return (
    <>
    <h1>JukeBox</h1>
      <TrackList tracks={tracks} />
    
    </>
  )
};


export default App
