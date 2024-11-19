import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Professional from "./pages/Professional";
import Projects from "./pages/Projects";
import NonTech from "./pages/NonTech";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/non-tech" element={<NonTech />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
