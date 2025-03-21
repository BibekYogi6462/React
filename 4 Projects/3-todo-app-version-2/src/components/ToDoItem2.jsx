import React from "react";

let todoName = "Go To College";
let todoDate = "4/10/2025";

const ToDoItem2 = () => {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem2;
