import React from 'react'

export default function Task( {chord, switchChord} ) {
  
  function handleNextClick() {
    switchChord(chord.name)
  }
  
  return (
    <div id = {chord.name}>


    </div>
  )
}