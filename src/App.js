import { useState } from 'react';
import './App.css';
import Hints from './components/Hints';
import WordCard from './components/WordCard';
import { words } from './components/words';
import Options from './components/Options';
import Sentences from './components/Sentences';
import Buttons from './components/Buttons';
import HeaderMessage from './components/HeaderMessage';

let length = words.length;
const randomNumber = Math.floor(Math.random() * (length));
let rightWord = words[randomNumber].word
let definition = words[randomNumber].definition
let synonyms = words[randomNumber].synonyms
let sentences = words[randomNumber].sentences




function App() {
  const [hints, setHints] = useState(false)
  const [sentenceToggle, setSentenceToggle] = useState(false)
  
  function handleHints () {
    setHints(hint=>!hint);
  }

  function handleSentenceToggle () {
    setSentenceToggle(sentenceToggle => !sentenceToggle)
  }


  return (
    <>
      <HeaderMessage/>
      <Options rightWord={rightWord} />
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
