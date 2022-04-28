export const Meanings = ({ meaning }) => {
  // const [meaning, setMeaning] = useState("");
  console.log(meaning.definitions[0].definition);

  return (
    <div>
      <h2>Part of Speech : {meaning.partOfSpeech}</h2>
      {meaning.definitions.map((def, i) => {
        return (
          <div key={i}>
            <h2>Definition: {def.definition}</h2>;
            {def.example && <h2>Example: {def.example}</h2>}
          </div>
        );
      })}
    </div>
  );
};
