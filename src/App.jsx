import { lazy, Suspense } from "react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
const Us = lazy(() => import("./sections/Us"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <section id="us" className="overflow-hidden bg-transparent">
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Us />
        <Contact />
        <Footer />
      </Suspense>
    </section>
  );
};

export default App;
