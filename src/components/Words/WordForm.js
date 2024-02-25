import { useState } from 'react';
import styles from './WordForm.module.css';

function WordForm({ addWord }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text.trim() === '') {
      alert('input cannot be empty');
    } else {
      addWord(text);
      setText('');
    }
  };

  return (
    <div className={styles.WordForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new word"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default WordForm;
