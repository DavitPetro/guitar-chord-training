/*Script file for the To-do list*/
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import OpenChordList from './components/OpenChordList';



function App() {

  // Store The names of all open chords
  var openChordNames = ["A", "Am", "C", "D", "Dm", "E", "Em", "G"]
  // Store the name of the currently displayed chord
  var [currentChord, setCurrentChord] = useState();

  /*
   * Returns an integer random number between min (included) and max (included)
   */
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*
   * Starts practice for open chords, picking a random chord using the number generator function
   */
  function startOpenChords() {
    document.getElementById("open-chord-btn").style.display = "none"
    document.getElementById("sus-chord-btn").style.display = "none"
    var rand = randomInteger(0, 7)
    var chord = document.getElementById(openChordNames[rand])
    chord.style.display = "block"
    setCurrentChord(chord)
  }

  function switchOpenChord(name) {
    var rand = randomInteger(0, 7)
    // If we're getting the same chord name as before, randomize until the names are different
    while(openChordNames[rand] === currentChord.id) {
      rand = randomInteger(0, 7)
    }
    var nextChord = document.getElementById(openChordNames[rand])
    currentChord.style.display = "none"
    nextChord.style.display = "block"
    setCurrentChord(nextChord)
  }

  function soundChord(name) {
  }

  function exitChord(name) {
    currentChord.style.display = "none"
  }

  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button id="open-chord-btn" className="menu-btn btn mb-2" onClick={startOpenChords}>Open Chords</button>
      <div id="open-chords">
        <OpenChordList chords={openChordNames} 
                       switchOpenChord={switchOpenChord} 
                       soundChord={soundChord}
                       exitChord={exitChord} />
      </div>
      <button id="sus-chord-btn" className="menu-btn btn">Suspended Chords</button>
    </div>
  )
}

export default App;