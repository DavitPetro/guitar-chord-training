/*
    Filename: Chord.js
    Author: Davit Petrosyan
    Description: Chord component. 
*/

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

export default function Chord( {chord, switchChord, soundChord, exitChord} ) {

  const chordSound = chord + "Sound"
  
  function handleNextClick() {
    switchChord(chord)
  }

  function handleSoundClick() {
    soundChord(chord)
  }

  function handleExit() {
    exitChord(chord)
  }
  
  return (
    <div id={chord} className="chord-comp" style = {{display: "none"}}>
        <h2>{chord} Chord</h2>
        <img className="d-block img-fluid" src={require(`../images/chords/${chord}.png`)} alt={chord}></img>
        <button className="btn btn-danger d-inline me-5" onClick={handleExit}>Exit <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
        <button className="btn btn-primary d-inline" onClick={handleSoundClick}>Sound Chord <FontAwesomeIcon icon={faVolumeHigh} /></button>
        <audio id={chordSound}>
          <source src={require(`../audio-files/${chord}.mp3`)} type="audio/mpeg"></source>
        </audio>
        <button className="btn btn-success d-inline ms-5" onClick={handleNextClick}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}