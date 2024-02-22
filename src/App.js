import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import WordsList from './components/Words/WordsList';
import WordForm from './components/Words/WordForm';

function App() {
  const [words, setWords] = useState([]);

  const addWordHandler = (text) => {
    const newWord = {
      text: text,
      // isCompleted = false,
      id: uuidv4(),
    };
    setWords([...words, newWord]);
  };

  return (
    <div className="App">
      <h1>Words List</h1>
      <WordForm addWord={addWordHandler} />
      <WordsList words={words} />
    </div>
  );
}

export default App;
