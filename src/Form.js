import { useState } from "react";
import axios from "axios";
import { Result } from "./Result";

export const Form = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const handleResponse = (response) => {
    console.log(response.data[0]);
    setResult(response.data[0]);
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
    <div>
      <form onSubmit={search}>
        <input
          onChange={handleInputChange}
          value={word}
          type="search"
          autoFocus={true}
        />
      </form>
      <Result result={result} />
    </div>
  );
};
