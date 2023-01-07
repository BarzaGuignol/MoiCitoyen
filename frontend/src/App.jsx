import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@components/Navbar";
import Home from "./pages/Home";
import Travail from "./pages/Travail";
import Logement from "./pages/Logement";
import Santé from "./pages/Santé";
import Education from "./pages/Education";
import Recensement from "./pages/Recensement";
import Mort from "./pages/Mort";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travail" element={<Travail />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/santé" element={<Santé />} />
        <Route path="/éducation" element={<Education />} />
        <Route path="/recensement" element={<Recensement />} />
        <Route path="/Mort" element={<Mort />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
