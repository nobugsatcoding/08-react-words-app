import { useState } from 'react';
import styles from './Word.module.css';
import { GrLike, GrDislike } from 'react-icons/gr';

function Word({ word }) {
  const [likeIconVisible, setLikeIconVisible] = useState(true);
  const [dislikeIconVisible, setDislikeIconVisible] = useState(true);
  const [likeText, setLikeText] = useState('good');
  const [dislikeText, setDislikeText] = useState('keep learning');

  const likeClickHandle = () => {
    setLikeIconVisible(!likeIconVisible);
    setLikeText(setLikeIconVisible ? 'good' : '');
  };

  const disLikeClickHandle = () => {
    setDislikeIconVisible(!dislikeIconVisible);
    setDislikeText(setDislikeIconVisible ? 'keep learning' : '');
  };

  return (
    <div className={styles.word}>
      <div className={styles.wordText}>
        {word}
        <div className={styles.iconContainer}>
          <div>
            {likeIconVisible ? (
              <GrLike
                onClick={likeClickHandle}
                className={styles.likeDislike}
                style={{ backgroundColor: 'green' }}
              />
            ) : (
              <span>{likeText}</span>
            )}
          </div>
          <div>
            {dislikeIconVisible ? (
              <GrDislike
                onClick={disLikeClickHandle}
                style={{ backgroundColor: 'red' }}
                className={styles.likeDislike}
              />
            ) : (
              <span>{dislikeText}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Word;
