import React, { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    return word.toLowerCase() === reversedWord.toLowerCase();
  };

  useEffect(() => {
    if (isPalindrome(word)) {
      setResult("This is a palindrome");
    } else {
      setResult("This is NOT a palindrome");
    }
  }, [word]);

  return (
    <div>
      <label>
        Enter a word:
        <input type="text" value={word} onChange={handleChange} />
      </label>
      <p>{result}</p>
    </div>
  );
}

export default App;
