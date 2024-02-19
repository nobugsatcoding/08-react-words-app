import styles from './Word.module.css';
import { GrLike, GrDislike } from 'react-icons/gr';

function Word({ word }) {
  return (
    <div className={styles.word}>
      <div className={styles.wordText}>
        {word}
        <div>
          <GrLike style={{backgroundColor: "green"}} className={styles.likeDislike}/>
          <GrDislike style={{backgroundColor: "red"}} className={styles.likeDislike}/>
        </div>
      </div>
    </div>
  );
}

export default Word;
