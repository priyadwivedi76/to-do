import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you create a styles.css file for styling

function App() {
  return (
    <div className="todo-container">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        To-Do List
      </motion.h1>
      <div className="task-input">
        <input type="text" placeholder="Enter a task..." />
        <button>Add Task</button>
      </div>
      <ul className="task-list">
        <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          Sample Task
          <button>❌</button>
        </motion.li>
      </ul>
    </div>
  );
}

export default App;

