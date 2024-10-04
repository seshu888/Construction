import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Service from "./components/Service";
import Working from "./components/Working";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Working />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
