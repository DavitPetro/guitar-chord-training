import React from 'react'
import OpenChord from './OpenChord'

export default function OpenChordList ( {chords, switchChord, soundChord} ) {
    return (
        chords.map(chord => {
            return <OpenChord key = {chord} chord = {chord} switchChord = {switchChord} soundChord = {soundChord}/>
        })
    )
}
