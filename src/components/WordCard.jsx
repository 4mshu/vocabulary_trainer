import React from 'react'
import { words } from './words.js'


export default function WordCard(props) {
  const {definition, handleHints} = props;
  return (
    <fieldset className='border-2 rounded border-solid border-blue-500 w-96 p-2 mx-auto'>
      <legend className='text-2xl font-bold text-center'>
        Definition
      </legend>
      <div className='text-lg'>
        {definition}
      </div>
    </fieldset>
  )

}
