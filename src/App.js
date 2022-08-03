/*Script file for the To-do list*/
import React, {useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import OpenChords from './components/OpenChords';



function App() {

  var openChords = new Array()

  function switchChord(name) {
    const chord = openChords.find(chord => chord.name === name)
  }

  function soundChord(name) {

  }

  // Load chords into arrays
  useEffect(() => {
    openChords[0] = new Image()
    openChords[0].src = 'images/open-chords/A.png'
    openChords[0].name = 'A Major'
    openChords[1] = new Image()
    openChords[1].src = 'images/open-chords/Am.png'
    openChords[1].name = 'A Minor'
    openChords[2] = new Image()
    openChords[2].src = 'images/open-chords/C.png'
    openChords[2].name = 'C Major'
    openChords[3] = new Image()
    openChords[3].src = 'images/open-chords/D.png'
    openChords[3].name = 'D Major'
    openChords[4] = new Image()
    openChords[4].src = 'images/open-chords/Dm.png'
    openChords[4].name = 'D Minor'
    openChords[5] = new Image()
    openChords[5].src = 'images/open-chords/E.png'
    openChords[5].name = 'E Major'
    openChords[6] = new Image()
    openChords[6].src = 'images/open-chords/Em.png'
    openChords[6].name = 'E Minor'
    openChords[7] = new Image()
    openChords[7].src = 'images/open-chords/G.png'
    openChords[7].name = 'G Major'
  }, [])


  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button className="btn mb-2">Open Chords</button>
      <OpenChords chords={openChords} switchChord={switchChord} soundChord={soundChord} />
      <br></br>
      <button className="btn">Suspended Chords</button>
    </div>
  )
}

export default App;