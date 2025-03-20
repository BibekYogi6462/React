import React from "react";

const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert("You just entered");
  };

  return (
    <div>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Bibek")}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("hello user");
    props.onClick(); // Call the function
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greet</button>
    </>
  );
};

export default EventProps;
