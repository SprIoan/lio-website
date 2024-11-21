import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Us from "./sections/Us";

const App = () => {
  return (
    <section id="us" className="overflow-hidden bg-transparent">
      <Header />
      <Hero />
      <Us />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
