import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./scss/style.css";
import Navigation from "./components/Navigation";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<>
          <Navigation />
          <ContactForm />
          <Footer />

        </>} />
      </Routes>
    </div>
  );
}

export default App;
