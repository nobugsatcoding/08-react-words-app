import { useState } from 'react';
import './App.css';
import WordsList from './components/Words/WordsList';
import WordForm from './components/Words/WordForm';

function App() {
  const [words, setWords] = useState([]);

  const addWordHandler = (text) => {
    setWords([...words, text])
  }

  return (
    <div className="App">
      <h1>Words List</h1>
      <WordForm addWord={addWordHandler}/>
      <WordsList words={words} />
      <button>Check</button>
    </div>
  );
}

export default App;
