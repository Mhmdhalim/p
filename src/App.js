import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hello from "./components/hello/Hello";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

import "./style/tailoutput.css";
import "./App.css"

import { useState } from "react";
import Colores from "./components/asideColores/Colores";

const App = () => {
  const [background, setBackground] = useState(true);
  const body = document.querySelector("body");
  const toggleBackground = () => {
    setBackground(!background);
    body.classList.toggle("active");
  };

  return (
    <div
      className={`app relative ${
        !background ? "bg-white text-[#27272A]" : "bg-[#27272A] text-white"
      }`}
    >
      <header>
        <Navbar toggleBackground={toggleBackground} bg={background} />
      </header>
      <div className="absolute right-5 top-32">
        <Colores />
      </div>
    
      <Hello toggleBackground={background} />
      <About toggleBackground={background} />
      <Portfolio toggleBackground={background} />
      <Footer toggleBackground={background} />
    </div>
  );
};

export default App;