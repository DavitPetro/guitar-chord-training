import React from 'react'
import Chord from './Chord'

export default function OpenChords ( {chords, switchChord, soundChord} ) {
    return (
        chords.map(chord => {
            return <Chord key = {chord.name} switchChord = {switchChord} soundChord = {soundChord} chord = {chord}/>
        })
    )
}
