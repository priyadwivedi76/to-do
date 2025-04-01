import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import FormTask from "./components/FormTask";
import "./App.css"; // Ensure you create a styles.css file for styling
function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<FormTask/>}/>
    </Routes>
    </>
  )
}

export default App;

