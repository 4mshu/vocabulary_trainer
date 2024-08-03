import React from 'react'

export default function Options(props) {
    const {rightWord, handleSentenceToggle} = props;
  return (
<div className='text-center p-4'>
        <p className='border-4 border-blue-500 text-3xl font-bold h-16 w-64 rounded-lg shadow-lg z-50 mx-auto p-2'>
        {rightWord}
        </p>  
</div>

  )
}
