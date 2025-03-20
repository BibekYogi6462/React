import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container/Container";
import "./App.css";

const App = () => {
  return (
    // <React.Fragment>
    //   <h1>Healthy Foods</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item">Rice</li>
    //     <li class="list-group-item">Spinach</li>
    //     <li class="list-group-item">Vegetable</li>
    //     <li class="list-group-item">Milk</li>
    //     <li class="list-group-item">Fruits</li>
    //   </ul>
    // </React.Fragment>
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ul class="list-group">
          <li class="list-group-item">Rice</li>
          <li class="list-group-item">Spinach</li>
          <li class="list-group-item">Vegetable</li>
          <li class="list-group-item">Milk</li>
          <li class="list-group-item">Fruits</li>
        </ul>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          wellbeing
        </p>
      </Container> */}
    </>
  );
};

export default App;
