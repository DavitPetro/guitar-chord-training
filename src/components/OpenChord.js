import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function OpenChord( {chord, switchOpenChord, soundChord} ) {
  
  function handleNextClick() {
    switchOpenChord(chord)
  }

  function handleSoundClick() {
    soundChord(chord)
  }

  function handleExit() {

  }
  
  return (
    <div id = {chord} style = {{display: "none"}}>
        <img className="d-block img-fluid" src={require(`../images/open-chords/${chord}.png`)} alt={chord}></img>
        <button className="btn btn-danger d-inline me-4" onClick={handleExit}>Exit <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
        <button className="btn btn-primary d-inline" onClick={handleSoundClick}>Sound Chord</button>
        <button className="btn btn-success d-inline ms-4" onClick={handleNextClick}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}