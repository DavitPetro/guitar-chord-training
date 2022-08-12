/*
    Filename: App.js
    Author: Davit Petrosyan
    Description: Main logical component of the guitar chord practice application.
*/
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ChordList from './components/ChordList';



function App() {

  // Store The names of all  chords
  var chordNames = ["A", "Am", "C", "D", "Dm", "E", "Em", "G", "F"]
  // Store the name of the currently displayed chord
  var [currentChord, setCurrentChord] = useState();

  /*
   * Returns an integer random number between min (included) and max (included)
   */
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*
   * Starts practice for the chords, picking a random chord using the number generator function
   */
  function startChords() {
    document.getElementById("play-btn").style.display = "none"
    document.getElementById("info-card").style.display = "none"
    var rand = randomInteger(0, 8)
    var chord = document.getElementById(chordNames[rand])
    chord.style.display = "block"
    setCurrentChord(chord)
  }

  function switchChord(name) {
    var rand = randomInteger(0, 8)
    // If we're getting the same chord name as before, randomize until the names are different
    while(chordNames[rand] === currentChord.id) {
      rand = randomInteger(0, 8)
    }
    var nextChord = document.getElementById(chordNames[rand])
    currentChord.style.display = "none"
    nextChord.style.display = "block"
    setCurrentChord(nextChord)
  }

  function soundChord(name) {
    const chordSound = name + "Sound"
    const audio = document.getElementById(chordSound)
    console.log(audio)
    audio.play()
  }

  function exitChord(name) {
    currentChord.style.display = "none"
    document.getElementById("play-btn").style.display = "inline"
    document.getElementById("info-card").style.display = "block"
  }

  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button id="play-btn" className="menu-btn btn mb-2" onClick={startChords}>Play Chords</button>
      <div id="chords-list">
        <ChordList chords={chordNames} 
                       switchChord={switchChord} 
                       soundChord={soundChord}
                       exitChord={exitChord} />
      </div>
      <div id="info-card" className="card text-bg-dark">
          <h3 className="card-header">Guitar Chord Training App</h3>
          <div className="card-body">
              <p>This program is a tool to help one improve their skill and knowledge around various guitar chords. 
                The chords included in the program are the basic chord shapes defined at the first fret of the guitar.
                Thus, it is intended for early beginners.</p>
                <p>The program using the Bootstrap framework for the front-end design, as well as React for more front-end and back-end support.</p>
                <a href="https://github.com/DavitPetro" className="btn btn-info" role="button" target="_blank" rel="noreferrer">My Github Page <FontAwesomeIcon icon={faGithub} /></a>
          </div>
      </div>
    </div>
  )
}

export default App;