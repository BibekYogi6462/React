import React from "react";
import User from "./User";
import Members from "./Members";

const App = () => {
  function getData() {
    alert("Hello from app");
  }
  return (
    <div>
      <User data={getData} />
      <div>
        <Members data={getData} />
      </div>
    </div>
  );
};

export default App;
