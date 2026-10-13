function Vision() {
  return (
    <section id="vision" className="py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        <div className="rounded-2xl bg-box-dark px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mb-6 font-heading text-4xl text-gold sm:text-5xl font-medium tracking-wide">
            Our Vision
          </h2>

          <p className="mx-auto max-w-3xl text-xs sm:text-sm leading-relaxed text-box-light/75">
            To be Nepal&apos;s premier fragrance house, elevating nepali heritage onto the global stage through fine perfumery, while making{" "}
            <br className="hidden md:inline" />
            refined, everyday luxury an effortless standard for men across the nation.
          </p>

          <a
            href="#products"
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-box-light/60 transition-colors hover:text-gold"
          >
            Scroll to Witness
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Vision;
