import { useState } from 'react';
import styles from './Word.module.css';
import { GrLike, GrDislike } from 'react-icons/gr';

function Word({ word }) {
  const [likeText, setLikeText] = useState('YES!');
  const [dislikeText, setDislikeText] = useState('NO!');

  const likeClickHandle = () => {
    setLikeText(likeText === 'YES!' ? '' : 'YES!');
  };

  const disLikeClickHandle = () => {
    setDislikeText(dislikeText === 'NO!' ? '' : 'NO!');
  };

  return (
    <div className={styles.word}>
      <div className={styles.wordText}>{word.text}</div>
      <div className={styles.iconContainer}>
        <div>
          {likeText ? (
            <span onClick={likeClickHandle}>{likeText}</span>
          ) : (
            <GrLike
              className={styles.likeDislike}
              style={{ backgroundColor: 'green' }}
            />
          )}
        </div>
        <div>
          {dislikeText ? (
            <span onClick={disLikeClickHandle}>{dislikeText}</span>
          ) : (
            <GrDislike
              style={{ backgroundColor: 'red' }}
              className={styles.likeDislike}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Word;
