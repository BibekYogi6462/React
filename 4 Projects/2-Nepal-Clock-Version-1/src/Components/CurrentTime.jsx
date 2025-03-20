import React from "react";

const CurrentTime = () => {
  let Time = new Date();

  return (
    <p className="lead">
      This is a current time: {Time.toLocaleDateString()}-
      {Time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
