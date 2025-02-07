import About from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
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
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
