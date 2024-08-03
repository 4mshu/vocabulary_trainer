import React from 'react'

export default function Buttons(props) {
    const {handleHints, handleSentenceToggle} = props
  return (
    <div className='text-center mt-10'>
        <button className='hover:bg-blue-300 duration-200' onClick={handleHints}>Synonyms</button> | <button onClick={handleSentenceToggle} className='hover:bg-blue-300 duration-200'>Sentences</button>
    </div>
  )
}
