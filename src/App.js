import { useState } from 'react';
import './App.css';
import Hints from './components/Hints';
import WordCard from './components/WordCard';
import { words } from './components/words';
import Sentences from './components/Sentences';
import Buttons from './components/Buttons';
const apiKey = process.env.REACT_APP_API_KEY;

let length = words.length;
const randomNumber = Math.floor(Math.random() * (length));
let definition = words[randomNumber].definition
let synonyms = words[randomNumber].synonyms
let sentences = words[randomNumber].sentences




function App() {
  const [hints, setHints] = useState(false)
  const [sentenceToggle, setSentenceToggle] = useState(false)
  const [inputValue, setInputValue] = useState("")
  
  function handleHints () {
    setHints(hint=>!hint);
  }

  function handleSentenceToggle () {
    setSentenceToggle(sentenceToggle => !sentenceToggle)
  }

  const handleClick = () => {
    vocalBuilder(inputValue);
  };

  function vocalBuilder (word) {
    console.log(word);
  }


  return (
    <>
      <div className='text-center p-4'>
      <input
        className='border-4 border-blue-500 text-3xl font-bold h-16 w-64 rounded-lg shadow-lg z-50 mx-auto p-2 bg-slate-300 text-blue-400'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick} className='border-4 border-blue-500 text-2xl font-semibold h-16 w-24 rounded-lg shadow-lg z-50 mx-20 p-2 bg-slate-300 text-blue-400'>
        Search
      </button>
    </div>
      <WordCard definition={definition}/>
      <Buttons handleHints={handleHints} handleSentenceToggle={handleSentenceToggle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>{hints ? <Hints synonyms={synonyms} /> : <div></div>}</div>
  <div>{sentenceToggle ? <Sentences sentences={sentences} /> : <div></div>}</div>
</div>
    </>

  );
}

export default App;
