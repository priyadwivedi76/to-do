import React from "react";
import TodoCard from "./components/TodoCard";
import "./App.css"; // Ensure you create a styles.css file for styling
import FormTask from "./components/FormTask";
function App() {
  return (
    <>
    <div className="main-section">
      <h1>My Todo App</h1>
      <FormTask />
      <div className="container">
        <TodoCard/>
      </div>
    </div>
    </>
  );
}

export default App;

