import React, { useState, useRef } from "react";
//import styles
import "./Styles/App.scss";
//imprt components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from './components/Nav'
//import util
import data from "./data";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //ref
  const audioRef = useRef(null);
  //handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration= Math.round(duration);
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100 )
   
    setSongInfo({ ...songInfo, currentTime: current, duration: duration ,animationPercentage:animationPercentage});
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs ={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}

        
      />
      <Library
      libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        currentSong={currentSong}
        
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        
      ></audio>
    </div>
  );
}

export default App;
