import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import Offer from "./components/Offer/Offer";
import Navi from "./components/Navi/Navi";
import Projects from "./components/Projects/Projects";
import OfferMitsubishi from "./components/Offer/Mistubishi/OfferMitsubishi";
import OfferVaillant from "./components/Offer/Vaillant/OfferVaillant";
import OfferSmartHome from "./components/Offer/SmartHome/OfferSmartHome";
import Subventions from "./components/Subventions/Subventions";
import Privacypolicy from "./components/Privacypolicy/Privacypolicy";

const PageContent = () => {
  return (
    <>
      <div id="top" />
      <Hero />
      <Navi />
      <AboutUs />
      <HowWeWork />
      <Offer />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <div style={{ height: "55px" }}> </div>
        <main>
          <Routes>
            <Route path="/" element={<PageContent />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/angebot/warmepumpe/mitsubishi"
              element={
                <>
                  <Navi />
                  <OfferMitsubishi />
                  <HowWeWork />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path="/angebot/warmepumpe/vaillant"
              element={
                <>
                  <Navi />
                  <OfferVaillant />
                  <HowWeWork />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path="/angebot/warmepumpe/smart-home"
              element={
                <>
                  <Navi />
                  <OfferSmartHome />
                  <HowWeWork />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path="/zuschusse"
              element={
                <>
                  <Navi />
                  <Subventions />
                  <HowWeWork />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path="/datenschutzrichtlinie"
              element={
                <>
                  <Navi />
                  <Privacypolicy />
                  <HowWeWork />
                  <Projects />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
