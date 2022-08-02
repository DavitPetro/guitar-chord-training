import React from 'react'

export default function Task( {chord, switchChord, soundChord} ) {
  
  function handleNextClick() {
    switchChord(chord.name)
  }

  function handleSoundClick() {
    soundChord(chord.name)
  }
  
  return (
    <div id = {chord.name} style={{visibility: hidden}}>
        <button onClick={handleSoundClick}>Sound Chord</button>
        <button onClick={handleNextClick}>Next <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}