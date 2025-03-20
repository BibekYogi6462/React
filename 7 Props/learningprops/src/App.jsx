import Student from "./Components/Student";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Student List</h1>
      <Student name="SpongeBob" age={30} />
      <Student name="Bibek" age={20} />
    </div>
  );
};

export default App;
