import React from "react";

const EventHandling = () => {
  function handleClick() {
    alert("Its Clicked haha");
  }

  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
    </div>
  );
};

export default EventHandling;
