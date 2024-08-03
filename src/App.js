import { useState } from 'react';
import './App.css';
import Hints from './components/Hints';
import WordCard from './components/WordCard';
import { words } from './components/words';
import Options from './components/Options';

let length = words.length;
const randomNumber = Math.floor(Math.random() * (length));
let rightWord = words[randomNumber].word
let definition = words[randomNumber].definition
let synonyms = words[randomNumber].synonyms




function App() {
  const [hints, setHints] = useState(false)
  
  function handleHints () {
    setHints(hint=>!hint);
  }


  return (
    <>
      <WordCard definition={definition} handleHints={handleHints}/>
      <Options rightWord={rightWord} />
      {hints && <Hints synonyms={synonyms} />}
      
    </>

  );
}

export default App;
