import React from 'react'

export default function (props) {
    const {synonyms} = props
  return (
  
    <fieldset className='capitalize'>
      <legend className=''>
        Synonyms
      </legend>
    {synonyms.join(" ")}
  </fieldset>

  )
}
