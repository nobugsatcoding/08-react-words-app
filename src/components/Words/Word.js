import { useState, useEffect } from 'react';
import styles from './Word.module.css';
import { GrLike, GrDislike } from 'react-icons/gr';

function Word({ word }) {
  const [likeText, setLikeText] = useState('YES!');
  const [dislikeText, setDislikeText] = useState('NO!');
  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setDisLikeCount] = useState(0);

  useEffect(() => {
    const storedLikeCounts =
      parseInt(localStorage.getItem(`likeCount_${word.id}`)) || 0;
    const storedDisLikeCounts =
      parseInt(localStorage.getItem(`disLikeCount_${word.id}`)) || 0;

    setLikeCount(storedLikeCounts);
    setDisLikeCount(storedDisLikeCounts);
  }, [word.id]);

  const likeClickHandle = () => {
    setLikeText(likeText === 'YES!' ? '' : 'YES!');
    setLikeCount((prevLikeCount) => {
      const newLikeCount = prevLikeCount + 1;
      localStorage.setItem(`likeCount_${word.id}`, newLikeCount.toString());
      return newLikeCount;
    });
  };

  const disLikeClickHandle = () => {
    setDislikeText(dislikeText === 'NO!' ? '' : 'NO!');
    setDisLikeCount((prevDisLikeCount) => {
      const newDisLikeCount = prevDisLikeCount + 1;
      localStorage.setItem(
        `disLikeCount_${word.id}`,
        newDisLikeCount.toString(),
      );
      return newDisLikeCount;
    });
  };

  const likeDislikePercents = (
    (likeCount / (likeCount + disLikeCount)) *
    100
  ).toFixed(0);

  return (
    <div className={styles.word}>
      <div className={styles.wordText}>
        <div>{word.text}</div>
        <div className={styles.percentText}>{`${
          isNaN(likeDislikePercents) ? 0 : likeDislikePercents
        }%`}</div>
      </div>
      <div className={styles.iconContainer}>
        <div>
          {likeText ? (
            <span onClick={likeClickHandle}>{likeText}</span>
          ) : (
            <>
              <GrLike
                className={styles.likeDislike}
                style={{ backgroundColor: 'green' }}
              />
              <span>{likeCount}</span>
            </>
          )}
        </div>
        <div>
          {dislikeText ? (
            <span onClick={disLikeClickHandle}>{dislikeText}</span>
          ) : (
            <>
              <GrDislike
                style={{ backgroundColor: 'red' }}
                className={styles.likeDislike}
              />
              <span>{disLikeCount}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Word;
