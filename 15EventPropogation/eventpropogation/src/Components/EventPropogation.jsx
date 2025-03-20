import React from "react";

const EventPropagation = () => {
  const handleParentClick = () => {
    console.log("Parent Div Clicked!");
  };

  const handleChildClick = (event) => {
    console.log("Child Button Clicked!");

    // Prevent event bubbling (stops it from reaching the parent)
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", background: "#eee" }}
    >
      <h3>Click inside the box:</h3>
      <button onClick={handleChildClick} style={{ padding: "10px" }}>
        Click Me
      </button>
    </div>
  );
};

export default EventPropagation;
