const Alphabets = ({ onlyVowels }) => {
  const vowells = ["a", "e", "i", "o", "u", "y"];
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <ul>
      {letters
        .filter((letter) => (onlyVowels ? vowells.includes(letter) : true))
        .map((letter) => (
          <li>{letter}</li>
        ))}
    </ul>
  );
};

export default Alphabets;
