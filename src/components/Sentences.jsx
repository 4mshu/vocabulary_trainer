import React from 'react';

export default function Sentences(props) {
    const { sentences } = props;
    return (
        <ul className='absolute top-3/4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slategray to-lightblue text-white p-5 text-left rounded-lg text-xl font-semibold shadow-lg border-2 border-white'>
            {sentences.map((x, index) => (
                <li key={index}>{index+1}. {x}</li>
            ))}
        </ul>
    );
}
