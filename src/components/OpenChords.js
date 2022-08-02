import React from 'react'
import Chords from './Chord'

function OpenChords ( {chords, switchChord, soundChord} ) {
    return (
        chords.map(chord => {
            return <Chord key = {chord.name} switchChord = {switchChord} chord = {chord}/>
        })
    )
}