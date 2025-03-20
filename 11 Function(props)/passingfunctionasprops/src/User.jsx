import React from "react";

const User = ({ data }) => {
  return (
    <div>
      <h1>Pass function as props</h1>
      <button onClick={data}>Call Function</button>
    </div>
  );
};

export default User;
