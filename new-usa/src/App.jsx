import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Owner from "./pages/Owner/Owner";
import Residence from "./pages/Residence/Residence";
import Contact from "./pages/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/owners" element={<Owner />} />
          <Route path="/residents" element={<Residence />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
