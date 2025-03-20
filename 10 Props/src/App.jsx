import React from "react";
import User from "./USer";
import College from "./College";
import Student from "./Student";
import { useState } from "react";

const App = () => {
  // let userName = "Rakesh";
  // let age = 19;
  // let email = "rakesh@gmail.com";

  // let userObj = {
  //   name: "Bibek",
  //   age: 15,
  //   email: "Bibek@gmail.com",
  // };
  // let collegeNames = ["Orchid", "Texas", "Deerwalk"];

  const [student, setStudent] = useState();

  return (
    <div>
      {/* <College clg={collegeNames} />
       */}

      {student && <Student name={student} />}
      <button onClick={() => setStudent("JAdu")}>Click</button>

      {/* <h1>Props</h1> */}
      {/* <User name={"Bibek Yogi"} age={18} /> */}
      {/* <User name={userName} age={age} email={email} /> */}

      {/* <User user={userObj} /> */}
    </div>
  );
};

export default App;
