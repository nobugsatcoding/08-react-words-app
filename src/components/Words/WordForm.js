import { useState } from 'react';

function WordForm({ addWord }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addWord(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new word"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button type="Submit">Submit</button>
    </form>
  );
}

export default WordForm;
