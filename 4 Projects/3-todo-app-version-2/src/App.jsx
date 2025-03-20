import React from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

const App = () => {
  const todoItems = [
    {
      name: "Run",
      date: "2061/04/8",
    },
    {
      name: "Eat",
      date: "2061/04/8",
    },
    {
      name: "Walk",
      date: "2061/04/8",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
