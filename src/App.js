/*Script file for the To-do list*/
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import OpenChords from './components/OpenChords';



function App() {

  return ( 
    <div id="content">
      <div id="header">
        <h1>Practice <FontAwesomeIcon icon={faGuitar} /></h1>
      </div>
      <button className="btn mb-2">Open Chords</button>
      <br></br>
      <button className="btn">Suspended Chords</button>
    </div>
  )
}

export default App;