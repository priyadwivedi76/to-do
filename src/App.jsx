import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import FormTask from "./components/FormTask";
import Details from "./components/Details";
import Weather from "./components/Weather";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import "./App.css"; // Ensure you have your styles

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  return (
    <Router> {/* Wrap everything inside HashRouter */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Home setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route path="/form" element={<FormTask />} />
        <Route path="/learn/:id" element={<Details />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;


