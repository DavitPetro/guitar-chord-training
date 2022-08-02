/*Script file for the To-do list*/
import React, { useState, useRef, useEffect } from 'react';
import OpenChords from './components/OpenChords';


function App() {

  return ( 
    <div id="content">
        <h1>Main Menu</h1>
        <h2>Practice</h2>
        <button className="btn">Open Chords</button>
        <button className="btn">Suspended Chords</button>
    </div>
  )
}

export default App;