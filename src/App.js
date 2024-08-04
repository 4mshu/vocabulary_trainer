import { useState } from 'react';
import './App.css';
import Hints from './components/Hints';
import WordCard from './components/WordCard';
import Sentences from './components/Sentences';
import Buttons from './components/Buttons';

function App() {
  const [hints, setHints] = useState(false)
  const [sentenceToggle, setSentenceToggle] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [definition, setDefinition] = useState("")
  const [synonyms, setSynonyms] = useState([])
  const [sentences, setSentences] = useState([])

  
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
    console.log(word)
    const {
      GoogleGenerativeAI,
      HarmCategory,
      HarmBlockThreshold,
    } = require("@google/generative-ai");
    
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI('AIzaSyCkp5GAu-McyBcVooCL__xATg2iVXY3w7Y');
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "Fill this JSON Object with the word the user will send. Each of the keys in the object can be defined as follows:\nword: It is the word that the use sends\ndefinition: definition of the word \nsynonyms: synonyms of the words, the synonyms should be academic in nature, discard slangs\nsentences: make 3-5 sentences using the word. The sentences should be compund in nature and should connect two ideas using conjunctions\n\n  {\n    word: \"\",\n    definition: \"\",\n    synonyms: [],\n    sentences: [\n      \"\",\n    ]\n  }",
    });
    
    const generationConfig = {
      temperature: 0,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };
    
    async function run() {
      const chatSession = model.startChat({
        generationConfig,
     // safetySettings: Adjust safety settings
     // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
          {
            role: "user",
            parts: [
              {text: "probe\n"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"probe\",\n  \"definition\": \"a slender, pointed instrument used for exploration or investigation, especially in surgery or in the examination of wounds, cavities, or other inaccessible parts of the body.\",\n  \"synonyms\": [\n    \"explore\",\n    \"investigate\",\n    \"examine\",\n    \"scrutinize\",\n    \"inquire\",\n    \"question\",\n    \"sound\",\n    \"test\",\n    \"assay\"\n  ],\n  \"sentences\": [\n    \"The doctor used a probe to examine the wound.\",\n    \"The journalist probed the politician's past for any scandals.\",\n    \"The spacecraft sent a probe to Mars to collect data.\"\n  ]\n}\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "horse"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"horse\",\n  \"definition\": \"A large, solid-hoofed, herbivorous quadruped, Equus caballus, domesticated since prehistoric times and used for riding, racing, and as a beast of burden.\",\n  \"synonyms\": [\n    \"steed\",\n    \"mount\",\n    \"equine\",\n    \"nag\",\n    \"gelding\",\n    \"mare\",\n    \"stallion\",\n    \"foal\",\n    \"pony\"\n  ],\n  \"sentences\": [\n    \"The horse galloped across the field.\",\n    \"She learned to ride a horse when she was young.\",\n    \"The knight rode his trusty horse into battle.\"\n  ]\n}\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "ubiquitous"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"ubiquitous\",\n  \"definition\": \"Being or seeming to be everywhere at the same time; omnipresent.\",\n  \"synonyms\": [\n    \"omnipresent\",\n    \"everywhere\",\n    \"pervasive\",\n    \"universal\",\n    \"rife\",\n    \"widespread\",\n    \"prevalent\",\n    \"common\"\n  ],\n  \"sentences\": [\n    \"Smartphones have become ubiquitous in modern society.\",\n    \"The ubiquitous presence of cameras raises privacy concerns.\",\n    \"The internet has made information ubiquitous.\"\n  ]\n}\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "tentacles"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"tentacles\",\n  \"definition\": \"A slender, flexible, elongated organ in animals, especially invertebrates, used for feeling, grasping, or locomotion.\",\n  \"synonyms\": [\n    \"appendages\",\n    \"feelers\",\n    \"arms\",\n    \"extremities\",\n    \"projections\",\n    \"suckers\",\n    \"tendrils\",\n    \"vines\"\n  ],\n  \"sentences\": [\n    \"The octopus used its tentacles to grasp its prey.\",\n    \"The jellyfish's tentacles trailed behind it in the water.\",\n    \"The plant's tentacles reached out towards the sunlight.\"\n  ]\n}\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "clear"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"clear\",\n  \"definition\": \"Free from cloudiness, obscurity, or mist; transparent.\",\n  \"synonyms\": [\n    \"transparent\",\n    \"bright\",\n    \"cloudless\",\n    \"fair\",\n    \"limpid\",\n    \"pellucid\",\n    \"translucent\",\n    \"unclouded\",\n    \"distinct\",\n    \"evident\",\n    \"obvious\",\n    \"plain\",\n    \"understandable\"\n  ],\n  \"sentences\": [\n    \"The sky was clear and blue.\",\n    \"She could see her reflection in the clear water.\",\n    \"He gave a clear explanation of the problem.\"\n  ]\n}\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "perish"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"perish\",\n  \"definition\": \"To\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "perish"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"perish\",\n  \"definition\": \"To suffer death, typically in a violent, sudden, or untimely way.\",\n  \"synonyms\": [\n    \"die\",\n    \"lose one's life\",\n    \"expire\",\n    \"pass away\",\n    \"succumb\",\n    \"croak\",\n    \"kick the bucket\",\n    \"vanish\",\n    \"disappear\",\n    \"evanesce\",\n    \"fade away\"\n  ],\n  \"sentences\": [\n    \"Many people perish in natural disasters.\",\n    \"The ancient city perished centuries ago.\",\n    \"Without water, the plants will perish.\"\n  ]\n}\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "comprehensive"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"comprehensive\",\n  \"definition\": \"Including or dealing with all or nearly all elements or aspects of something.\",\n  \"synonyms\": [\n    \"complete\",\n    \"full\",\n    \"extensive\",\n    \"thorough\",\n    \"inclusive\",\n    \"all-embracing\",\n    \"exhaustive\",\n    \"in-depth\",\n    \"wide-ranging\"\n  ],\n  \"sentences\": [\n    \"The doctor did a comprehensive examination of the patient.\",\n    \"The study provided a comprehensive overview of the subject.\",\n    \"We offer a comprehensive benefits package to our employees.\"\n  ]\n}\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "exhaustive"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"exhaustive\",\n  \"definition\": \"Examining, including, or considering all elements or aspects; fully comprehensive.\",\n  \"synonyms\": [\n    \"comprehensive\",\n    \"thorough\",\n    \"complete\",\n    \"in-depth\",\n    \"extensive\",\n    \"all-inclusive\",\n    \"all-embracing\",\n    \"leaving no stone unturned\"\n  ],\n  \"sentences\": [\n    \"The police conducted an exhaustive search for the missing child.\",\n    \"The report provided an exhaustive analysis of the data.\",\n    \"After an exhaustive debate, the committee finally reached a decision.\"\n  ]\n}\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "comprehensive\n"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"comprehensive\",\n  \"definition\": \"Including or dealing with all or nearly all elements or aspects of something.\",\n  \"synonyms\": [\n    \"complete\",\n    \"full\",\n    \"extensive\",\n    \"thorough\",\n    \"inclusive\",\n    \"all-embracing\",\n    \"exhaustive\",\n    \"in-depth\",\n    \"wide-ranging\"\n  ],\n  \"sentences\": [\n    \"The doctor did a comprehensive examination of the patient.\",\n    \"The study provided a comprehensive overview of the subject.\",\n    \"We offer a comprehensive benefits package to our employees.\"\n  ]\n}\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "prescribed"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"prescribed\",\n  \"definition\": \"(of a medical practitioner) advise and authorize the use of (a medicine or treatment) for someone, especially in writing.\",\n  \"synonyms\": [\n    \"authorize\",\n    \"order\",\n    \"direct\",\n    \"specify\",\n    \"stipulate\",\n    \"lay down\",\n    \"dictate\",\n    \"impose\",\n    \"enjoin\",\n    \"decreed\"\n  ],\n  \"sentences\": [\n    \"The doctor prescribed antibiotics for the infection.\",\n    \"The therapist prescribed a course of physical therapy.\",\n    \"The government has prescribed new safety regulations for the industry.\"\n  ]\n}\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "deepen"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"deepen\",\n  \"definition\": \"Make or become deep or deeper.\",\n  \"synonyms\": [\n    \"intensify\",\n    \"heighten\",\n    \"strengthen\",\n    \"reinforce\",\n    \"escalate\",\n    \"enhance\",\n    \"amplify\",\n    \"magnify\",\n    \"compound\"\n  ],\n  \"sentences\": [\n    \"The crisis has deepened the divisions within the country.\",\n    \"Their friendship deepened over the years.\",\n    \"The river deepened as it flowed towards the sea.\"\n  ]\n}\n\n\n```"},
            ],
          },
          {
            role: "user",
            parts: [
              {text: "deepen"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"word\": \"deepen\",\n  \"definition\": \"Make or become deep or deeper.\",\n  \"synonyms\": [\n    \"intensify\",\n    \"heighten\",\n    \"strengthen\",\n    \"reinforce\",\n    \"escalate\",\n    \"enhance\",\n    \"amplify\",\n    \"magnify\",\n    \"compound\"\n  ],\n  \"sentences\": [\n    \"The crisis has deepened the divisions within the country.\",\n    \"Their friendship deepened over the years.\",\n    \"The river deepened as it flowed towards the sea.\"\n  ]\n}\n\n```"},
            ],
          },
        ],
      });
    
      const result = await chatSession.sendMessage(word);
      const words = result.response.text();
      console.log(words)
    }
    
    run();
    
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
