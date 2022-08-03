/*Script file for the To-do list*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import OpenChordList from './components/OpenChordList';



function App() {

  var openChordNames = ["A", "Am", "C", "D", "Dm", "E", "Em", "G"]

  function switchChord(name) {
    //const chord = openChordNames.find(chord => chord === name)
  }

  function soundChord(name) {

  }

  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button className="btn">Open Chords</button>
      <div id="open-chords">
        <OpenChordList chords={openChordNames} switchChord={switchChord} soundChord={soundChord} />
      </div>
      <button className="btn">Suspended Chords</button>
    </div>
  )
}

export default App;