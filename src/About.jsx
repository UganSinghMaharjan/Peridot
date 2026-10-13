import aboutImg from "./assets/about.png";

function About() {
  return (
    <section id="about" className="py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        <div className="grid overflow-hidden rounded-xl md:grid-cols-2 items-stretch">
        {/* Left — beige text panel */}
        <div className="flex flex-col justify-center bg-box-light px-10 py-14">
          <h2 className="mb-6 font-heading text-3xl sm:text-4xl font-semibold uppercase tracking-widest text-box-dark">
            About Periidot
          </h2>

          <div className="space-y-5 text-sm leading-relaxed text-box-dark/70">
            <p>
              Born under the umbrella of LWE, PERIIDOT is a luxury fragrance
              brand born from the essence of Nepal. Inspired by its heritage,
              people, landscapes, and everyday way of life, it brings together
              contemporary luxury and a distinctly Nepali character.
            </p>
            <p>
              Each fragrance captures a different story and transforms it into a
              scent designed to be experienced, remembered, and worn every day.
            </p>
            <p>
              Rooted in rich heritage, Periidot is a homage to Nepali culture.
              Every bottle captures a piece of our land&apos;s character, spirit,
              and timeless elegance. Periidot is not merely an imported aesthetic
              assembled locally; it is an authentic reflection of Nepal, crafted
              at home, for the modern man who wears his identity with pride.
            </p>
          </div>
        </div>

        {/* Right — full-bleed image */}
        <div className="relative min-h-72 sm:min-h-96 md:min-h-0 overflow-hidden">
          <img
            src={aboutImg}
            alt="Boudhanath Stupa, Kathmandu"
            className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;
