import { useState } from "react";

export const Form = () => {
  const [word, setWord] = useState("");
  const search = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setWord(e.target.value);
  };
  return (
    <form onSubmit={search}>
      <input
        onChange={handleInputChange}
        value={word}
        type="search"
        autoFocus={true}
      />
      <p>{word}</p>
    </form>
  );
};
