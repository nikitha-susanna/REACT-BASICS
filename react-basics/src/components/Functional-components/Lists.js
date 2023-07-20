import React from "react";

function Lists(props) {
  // it is recomended not to use index as keys when we render a list
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skills: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skills: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skills: "Vue"
    }
  ];
  return (
    <div>
      {names.map((user) => (
        <h2>{user}</h2>
      ))}
      {persons.map(person =>(
         <h2 key={person.id}>I'am {person.name}, I'am {person.age} years old and I know {person.skill}</h2>
      ))}
    </div>
  );
}

export default Lists;
