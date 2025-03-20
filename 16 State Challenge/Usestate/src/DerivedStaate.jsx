import React from "react";
import { useState } from "react";

const DerivedStaate = () => {
  // const users =

  const [users, setUsers] = useState([
    { name: "Bibek", age: 25 },
    { name: "Gyan", age: 25 },
    { name: "Samar", age: 25 },
    { name: "Angeles", age: 25 },
  ]);
  return (
    <div>
      {/* {users.map((user) => (
        <h1>
          Name: {user.name} - age: {user.age}
        </h1>
      ))} */}

      <ul>
        {users.map((curElem, index) => {
          return (
            <>
              <li key={index}>
                {curElem.name}-{curElem.age} year old
              </li>
            </>
          );
        })}
      </ul>

      {/* USing use state  */}
    </div>
  );
};

export default DerivedStaate;
