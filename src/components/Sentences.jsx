import React from 'react';

export default function Sentences(props) {
    const { sentences } = props;
    return (
        <ul className=''>
            {sentences.map((x, index) => (
                <li key={index}>{index+1}. {x}</li>
            ))}
        </ul>
    );
}
