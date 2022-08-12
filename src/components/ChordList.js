/*
    Filename: ChordList.js
    Author: Davit Petrosyan
    Description: Chord list component. 
*/

import React from 'react'
import Chord from './Chord'

export default function ChordList ( {chords, switchChord, soundChord, exitChord} ) {
    return (
        chords.map(chord => {
            return <Chord key = {chord} 
                              chord = {chord} 
                              switchChord = {switchChord} 
                              soundChord = {soundChord}
                              exitChord = {exitChord}/>
        })
    )
}
