import React from "react";

const App = () => {
  let foodItems = ["Dal", "Vegatables", "Roti", "Salad"];
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }
  let msg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;
  return (
    <div>
      <>
        <h1>Healthy Foods</h1>
        {msg}
        <ul className="list-group">
          {foodItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default App;
