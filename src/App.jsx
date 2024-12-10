import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Footer from "./Components/Footer";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="w-[100%]  overflow-x-hidden ">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
