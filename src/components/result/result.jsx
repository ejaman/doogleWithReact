import React from "react";

const Result = ({ lists, word }) => {
  return (
    <section>
      <h1>result {word}</h1>
      {console.log(lists.filter((list) => list.name.includes(`${word}`)))}
      {lists
        .filter((list) => list.name.includes(`${word}`))
        .map((list) => (
          <div>
            <span>{list.sort}</span>
            <span>{list.name}</span>
            <span>{list.eng}</span>
            <span>{list.type}</span>
          </div>
        ))}
    </section>
  );
};

export default Result;
