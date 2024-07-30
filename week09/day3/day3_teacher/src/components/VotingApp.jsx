import { useState } from "react";

const VotingApp = (props) => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (indx) => {
    const newLanguages = [...languages];
    newLanguages[indx].votes++;
    setLanguages(newLanguages);
  };

  return (
    <>
      <h1>Vote for me:</h1>
      {languages.map((item, indx) => {
        return (
          <div key={indx}>
            {item.name} {item.votes}
            <button onClick={() => vote(indx)}>Vote!</button>
          </div>
        );
      })}
    </>
  );
};
export default VotingApp;
