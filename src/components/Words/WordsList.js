import Word from './Word';
import styles from './WordsList.module.css';

function WordsList({ words }) {
  return (
    <div className={styles.wordList}>
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  );
}

export default WordsList;
