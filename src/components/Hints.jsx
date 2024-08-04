import React from 'react'

export default function (props) {
    const {synonyms} = props
  return (
  
    <fieldset className='capitalize mx-8'>
      <legend className='text-2xl text-blue-200'>
        Synonyms
      </legend>
      <ul className='mx-2'>
        {synonyms.map((word,i) => {
          return (
            <li>{i+1}. {word}</li>
          )
        })}
      </ul>
  </fieldset>

  )
}
