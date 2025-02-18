import { lazy } from "react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

import Vision from "./sections/Vision";
import Team from "./sections/Team";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";

const App = () => {
  localStorage.setItem("countFinished", false);

  return (
    <section id="us" className="overflow-hidden bg-transparent">
      <Header />
      <Hero />
      <Team />
      <Vision />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
