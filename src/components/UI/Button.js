import styles from './Button.module.css'

function Button({words, setWords}) {
    const clickHandle = () => {
        setWords([]);
        localStorage.removeItem('words')
        }

  return (
    <button className={styles.clearButton} onClick={clickHandle}>Push to clear Word List</button>
  )
}

export default Button