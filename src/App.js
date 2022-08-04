/*Script file for the To-do list*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import OpenChordList from './components/OpenChordList';



function App() {

  var openChordNames = ["A", "Am", "C", "D", "Dm", "E", "Em", "G"]

  function startOpenChords() {
    var aChord = document.getElementById("A")
    aChord.style.display = "block"
  }

  function switchOpenChord(name) {
    const chord = openChordNames.find(chord => chord === name)
  }

  function soundChord(name) {
  }

  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button className="menu-btn btn" onClick={startOpenChords}>Open Chords</button>
      <div id="open-chords">
        <OpenChordList chords={openChordNames} switchOpenChord={switchOpenChord} soundChord={soundChord} />
      </div>
      <button className="menu-btn btn">Suspended Chords</button>
    </div>
  )
}

export default App;