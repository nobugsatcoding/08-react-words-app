import Word from './Word';

function WordsList({ words }) {
  return words.map((word, index) => <Word key={index} word={word} />);
}

export default WordsList;
