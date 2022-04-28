import { Meanings } from "./Meanings";
export const Result = ({ result }) => {
  console.log(result);
  if (result !== null) {
    return (
      <div>
        <h2>{result.word}</h2>
        {result.meanings.map((meaning, i) => {
          console.log(meaning);
          return (
            <div key={i}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};
