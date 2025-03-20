import React from "react";
import "../example.css";

const styles = {
  backgroundColor: "red",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
};
const Header = () => {
  return (
    <div className="div1">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="about">About</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      <li>
        <a href="Feedback">Feedback</a>
      </li>
    </div>
  );
};

export default Header;
