import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Chord( {chord, switchChord, soundChord} ) {
  
  function handleNextClick() {
    switchChord(chord.name)
  }

  function handleSoundClick() {
    soundChord(chord.name)
  }
  
  return (
    <div id = {chord.name} style={{visibility: 'hidden'}}>
        <button onClick={handleSoundClick}>Sound Chord</button>
        <button onClick={handleNextClick}>Next<FontAwesomeIcon icon="faArrowRight" /></button>
    </div>
  )
}