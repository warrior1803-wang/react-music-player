export const playAudio = async (audioRef, isPlaying) => {
  if (isPlaying){
      const audioPromise = await audioRef.current.play()
      audioRef.current.play()
  }
}

