import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* <Card name="Bibek">
        <h1>Hello This is First line</h1>
        <p>This is second line</p>
        <p>This is third line</p>
      </Card>
      <Card>
        <p>This is form second card</p>
      </Card> */}
      <Button handleClick={handleClick} text="Click Me">
        <h1>count</h1>
      </Button>
    </div>
  );
};

export default App;
