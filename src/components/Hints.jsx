import React from 'react'

export default function (props) {
    const {synonyms} = props
  return (
    <fieldset className='absolute left-1/2 transform -translate-x-1/2 capitalize bg-gradient-to-r from-slategray to-lightblue text-white p-5 text-center rounded-lg text-xl font-bold max-w-xl shadow-lg border-2 border-white'>
      <legend className='text-left'>
        Synonyms
      </legend>
    {synonyms.join(" ")}
  </fieldset>

  )
}
