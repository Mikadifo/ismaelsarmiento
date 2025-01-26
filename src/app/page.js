import About from "./components/About";
import CTA from "./components/CTA";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tilt from "./components/Tilt";

const Home = () => {
  return (
    <>
      <Navbar />
      <CTA />
      <Tilt />
      <About />
      <Services />
      <Contacto />
    </>
  );
};

export default Home;
