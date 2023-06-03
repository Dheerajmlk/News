import React from "react";
import Navbar from "./comp/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./comp/Footer";
import FetchData from "./comp/FetchData";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/General" element={<FetchData cat="general" />} />
          <Route path="/Business" element={<FetchData cat="business" />} />
          <Route path="/Entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/Health" element={<FetchData cat="health" />} />
          <Route path="/Science" element={<FetchData cat="science" />} />
          <Route path="/Sports" element={<FetchData cat="sports" />} />
          <Route path="/Technology" element={<FetchData cat="technology" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
