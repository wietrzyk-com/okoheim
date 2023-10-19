import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation, useNavigate
} from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Contact from "./components/Contact/Contact";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import Offer from "./components/Offer/Offer";
import Projects from "./components/Projects/Projects";
import OfferMitsubishi from "./components/Offer/Mistubishi/OfferMitsubishi";
import OfferVaillant from "./components/Offer/Vaillant/OfferVaillant";
import Subventions from "./components/Subventions/Subventions";

const PageContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if there's a hash in the URL, if so, scroll to the appropriate section
        if (location.hash) {
            const id = location.hash.substring(1); // Get the actual hash value without the '#'
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If there's no hash, check for a pathname and simulate a hash navigation
            // This is for cases where users enter URLs like "/contact" directly
            const potentialSection = location.pathname.substring(1);
            if (potentialSection) {
                navigate(`/#${potentialSection}`);
            }
        }
    }, [location, navigate]);


    return (
        <>
            <div id="top" />
            <Hero />
            <AboutUs />
            <HowWeWork />
            <Offer />
            <Projects />
            <Contact />
        </>
    )
}

function App() {
  return (
    <>
        <Router>
            <Header />
            <div style={{height: "55px"}}> </div>
            <main>
                <Routes>
                    <Route path="/" element={<PageContent />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/angebot/warmepumpe/mitsubishi" element={<>
                        <OfferMitsubishi />
                        <HowWeWork />
                        <Projects />
                        <Contact />
                    </>} />
                    <Route path="/angebot/warmepumpe/vaillant" element={<>
                        <OfferVaillant />
                        <HowWeWork />
                        <Projects />
                        <Contact />
                    </>} />
                    <Route path="/zuschusse"element={<>
                        <Subventions />
                        <HowWeWork />
                        <Projects />
                        <Contact />
                    </>} />
                </Routes>
            </main>
            <Footer />
        </Router>
    </>
  );
}

export default App;
