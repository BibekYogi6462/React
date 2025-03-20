import React from "react";
import { useState } from "react";

const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default LiftStateUp;

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};
const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is: {inputValue}</p>;
};
