import React from 'react'
import { words } from './words.js'


export default function WordCard(props) {
  const {definition, handleHints} = props;
  return (
    <fieldset className='absolute top-1/4 left-1/2 transform -translate-x-1/2 capitalize bg-gradient-to-r from-slategray to-lightblue text-white p-5 text-center rounded-lg text-xl font-bold max-w-xl shadow-lg border-2 border-white'>
      <legend className='text-right'>
        <button onClick={handleHints}>
          <i className="fa-regular fa-lightbulb"></i>
        </button>
      </legend>
    {definition}
  </fieldset>
  )

}
