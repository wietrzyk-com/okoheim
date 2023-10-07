import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
        <Header />
        <div style={{height: "55px"}}> </div>
        <main>
            <Hero />
            <AboutUs />
            <Contact />
        </main>
        <Footer />
    </>
  );
}

export default App;
