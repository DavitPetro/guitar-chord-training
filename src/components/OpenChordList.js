/*
    Filename: OpenChordList.js
    Author: Davit Petrosyan
    Description: Open chord list component. 
*/

import React from 'react'
import OpenChord from './OpenChord'

export default function OpenChordList ( {chords, switchOpenChord, soundChord, exitChord} ) {
    return (
        chords.map(chord => {
            return <OpenChord key = {chord} 
                              chord = {chord} 
                              switchOpenChord = {switchOpenChord} 
                              soundChord = {soundChord}
                              exitChord = {exitChord}/>
        })
    )
}
