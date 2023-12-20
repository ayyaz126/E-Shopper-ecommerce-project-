import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/abt" element={< About />}></Route>
          <Route path="/ser" element={<Services />}></Route>  
          <Route path="/con" element={<Contact />}></Route>          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
