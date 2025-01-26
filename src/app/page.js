import About from "./components/About";
import CTA from "./components/CTA";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Tilt from "./components/Tilt";

const Home = () => {
  return (
    <>
      <Navbar />
      <CTA />
      <Tilt />
      <About />
      <Services />
      <Testimonials />
      <Contacto />
      <Footer />
    </>
  );
};

export default Home;
