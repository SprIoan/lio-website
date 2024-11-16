import Contact from "./sections/Contact";
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
    </section>
  );
};

export default App;
