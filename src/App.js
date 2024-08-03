import { useState } from 'react';
import './App.css';
import Hints from './components/Hints';
import WordCard from './components/WordCard';
import { words } from './components/words';
import Options from './components/Options';
import Sentences from './components/Sentences';

let length = words.length;
const randomNumber = Math.floor(Math.random() * (length));
let rightWord = words[randomNumber].word
let definition = words[randomNumber].definition
let synonyms = words[randomNumber].synonyms
let sentences = words[randomNumber].sentences




function App() {
  const [hints, setHints] = useState(false)
  const [sentenceToggle, setSentenceToggle] = useState(true)
  
  function handleHints () {
    setHints(hint=>!hint);
  }


  return (
    <>
      
      <WordCard definition={definition} handleHints={handleHints}/>
      <Options rightWord={rightWord} setSentenceToggle={setSentenceToggle}/>
      {sentenceToggle && <Sentences sentences={sentences} />}
      {hints && <Hints synonyms={synonyms} />}
      
    </>

  );
}

export default App;
