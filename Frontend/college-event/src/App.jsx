import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./home/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Events from "./components/Events";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
