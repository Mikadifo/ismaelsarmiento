import About from "./components/About";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
import Tilt from "./components/Tilt";

const Home = () => {
  return (
    <>
      <Navbar />
      <CTA />
      <Tilt />
      <About />
    </>
  );
};

export default Home;
