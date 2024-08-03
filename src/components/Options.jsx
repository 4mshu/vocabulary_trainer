import React from 'react'

export default function Options(props) {
    const {rightWord} = props;
  return (
    <div>
        <button className='capitalize bg-gradient-to-r from-slategray to-lightblue text-white p-5 text-center rounded-lg text-xl font-bold max-w-xl shadow-lg border-2 border-white'>
            {rightWord}
        </button>
    </div>
  )
}
