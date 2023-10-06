import React from "react";
import "./App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
        <Header />
        <div style={{height: "55px"}}> </div>
        <main>
            <Hero />
        </main>
    </>
  );
}

export default App;
