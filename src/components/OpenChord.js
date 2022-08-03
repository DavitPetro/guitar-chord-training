import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function OpenChord( {chord, switchChord, soundChord} ) {
  
  function handleNextClick() {
    switchChord(chord)
  }

  function handleSoundClick() {
    soundChord(chord)
  }
  
  return (
    <div id = {chord} style = {{display: "none"}}>
        <img src={`../images/open-chords/${chord}.png`} alt={chord}></img>
        <button onClick={handleSoundClick}>Sound Chord</button>
        <button onClick={handleNextClick}>Next<FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}