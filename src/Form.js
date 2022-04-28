import { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [word, setWord] = useState("");
  const handleResponse = (response) => {
    console.log(response.data[0]);
  };

  const search = (e) => {
    e.preventDefault();
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
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
