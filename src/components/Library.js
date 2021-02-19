import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ audioRef, songs, setCurrentSong,isPlaying,setSongs,currentSong,libraryStatus}) => {
  return (
    <div className={ `library ${libraryStatus ? 'active-library' : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            audioRef={audioRef}
            key = {song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            isPlaying={isPlaying}
            setSongs={setSongs}
            id={song.id}
            currentSong={currentSong}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
