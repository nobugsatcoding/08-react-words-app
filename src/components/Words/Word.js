import { useState } from 'react';
import styles from './Word.module.css';
import { GrLike, GrDislike } from 'react-icons/gr';

function Word({ word }) {
  const [likeText, setLikeText] = useState('I known');
  const [dislikeText, setDislikeText] = useState('Do not remember');

  const likeClickHandle = () => {
    setLikeText(likeText === 'I known' ? '' : 'I known');
  };

  const disLikeClickHandle = () => {
    setDislikeText(dislikeText === 'Do not remember' ? '' : 'Do not remember');
  };

  return (
    <div className={styles.word}>
      <div className={styles.wordText}>
        {word.text}
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
    </div>
  );
}

export default Word;
