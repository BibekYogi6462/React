import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem todoName={item.name} todoDate={item.date} />
      ))}
    </div>
  );
};
export default ToDoItems;
