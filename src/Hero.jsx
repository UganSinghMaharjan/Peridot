import heroImg from "./assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden mb-5"
    >
      {/* Full-bleed hero image */}
      <img
        src={heroImg}
        alt="Periidot — Durbar, Mayur & Manaslu fragrances"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />

      {/* Subtle dark gradient at the bottom so content below blends */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-bg/80" />
    </section>
  );
}

export default Hero;
