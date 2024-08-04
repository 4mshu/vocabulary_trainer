import React from 'react';

export default function Sentences(props) {
    const { sentences } = props;
    return (
        <fieldset className='mx-8'>
        <legend className='text-2xl text-blue-200'>
          Sentences
        </legend>
        <ul className='mx-2'>
          {sentences.map((word,i) => {
            return (
              <li>{i+1}. {word}</li>
            )
          })}
        </ul>
    </fieldset>
    );
}
