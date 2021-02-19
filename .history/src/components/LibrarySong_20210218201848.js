import React from "react";
import {playAudio} from '../util';
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  currentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
 
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    playAudio(isPlaying,audioRef)
    //check if the song is playing
  //   if (isPlaying) {
  //     const playPromise = audioRef.current.play();
  //     if (playPromise !== undefined) {
  //       playPromise.then((audio) => {
  //         audioRef.current.play();
  //       });
  //     }
  //   }
  // };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
}

export default LibrarySong;
