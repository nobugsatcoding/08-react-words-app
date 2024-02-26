import Word from './Word';
import styles from './WordsList.module.css';

function WordsList({ words }) {
  return (
    <div>
      <div>
        {(!words.length && <h2> Word list is empty</h2>) || (
          <h2>Word List has {words.length} words</h2>
        )}
      </div>
      <div className={styles.wordList}>
        {words.map((word) => (
          <Word key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default WordsList;
