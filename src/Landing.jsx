import About from "./About";
import Vision from "./Vision";
import Hero from "./Hero";
import Products from "./Products";
import Assistance from "./Assistance";

const Landing = ({ onOpenModal }) => {
  return (
    <div>
      {/* video banner */}
      <Hero />
      {/* about peridot */}
      <About />
      {/* our vision*/}
      <Vision />
      {/* Our products */}
      <Products onOpenModal={onOpenModal} />
      {/* personal assistance */}
      <Assistance />
    </div>
  );
};

export default Landing;
