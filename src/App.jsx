import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import FormTask from "./components/FormTask";
import Details from "./components/Details";
import Weather from "./components/Weather";
import "./App.css"; // Ensure you create a styles.css file for styling
function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<FormTask/>}/>
      <Route path='/learn/:id' element={<Details/>}/>
      <Route path='/weather' element={<Weather/>}/>
    </Routes>
    </>
  )
}

export default App;

