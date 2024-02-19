import styles from './Word.module.css';

function Word({ word }) {
  return (
    <div className={styles.word}>
      <div className={styles.wordText}>{word}</div>
    </div>
  );
}

export default Word;
