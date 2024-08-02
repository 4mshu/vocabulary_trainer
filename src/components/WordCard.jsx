import React from 'react'
import { words } from './words'

let length = words.length;
const randomNumber = Math.floor(Math.random() * (length + 1));
let rightWord = words[randomNumber].word
let definition = words[randomNumber].definition


export default function WordCard() {
  return (
    <div>
        <p>{definition}</p>
    </div>
  )
}
