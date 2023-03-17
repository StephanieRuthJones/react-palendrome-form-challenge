import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPalindrome(word)) {
      setResult("This is a palindrome");
    } else {
      setResult("This is NOT a palindrome");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a word:
          <input type="text" value={word} onChange={handleChange} />
        </label>
        <button type="submit">Check</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default App;
