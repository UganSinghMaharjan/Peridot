import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineShieldCheck } from "react-icons/hi2";
import { GiPerfumeBottle } from "react-icons/gi";
import aboutImg from "./assets/about.png";
import manasluImg from "./assets/manaslu.jpeg";
import mayurImg from "./assets/Mayur.jpeg";
import durbarImg from "./assets/durbar.png";

const signatureFragrances = [
  {
    id: "manaslu",
    name: "Manaslu",
    tagline: "The Spirit of the Mountain",
    notes: "Bergamot • Blackcurrant • Birch • Ambergris",
    image: manasluImg,
    badge: "Alpine Fresh & Woody",
    desc: "A brisk ascent into Himalayan crispness. Opens with sharp citrus and fruit before deepening into cool birch smoke and mountain cedar.",
  },
  {
    id: "mayur",
    name: "Mayur",
    tagline: "The Regal Majesty",
    notes: "Plum • Saffron • Turkish Rose • Dark Oud",
    image: mayurImg,
    badge: "Velvety Floral & Amber Oud",
    desc: "An opulent expression inspired by the sacred peacock. Rich, alluring dark fruits and velvety florals resting upon a foundation of regal oud.",
  },
  {
    id: "durbar",
    name: "Durbar",
    tagline: "The Royal Court Heritage",
    notes: "Tobacco Leaf • Aged Leather • Sandalwood • Spices",
    image: durbarImg,
    badge: "Smoky Leather & Royal Woods",
    desc: "Evoking the carved wooden palace halls and timeless nobility of Kathmandu. Deep leather, warm spices, and noble sandalwood.",
  },
];

const pillars = [
  {
    icon: GiPerfumeBottle,
    title: "Extrait De Parfum Concentration",
    desc: "Formulated with 30%+ pure perfume oil concentration to ensure enduring longevity, rich sillage, and a dynamic 12+ hour scent evolution throughout the day.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Indigenous Himalayan Soul",
    desc: "Rooted in authentic Nepali heritage, blending mountain botanicals, rare resinous woods, and exquisite fine perfumery ingredients crafted specifically for discerning tastes.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Artisanal Italian Craftsmanship",
    desc: "Encased in frosted Italian glass bottles with custom sculpted metal caps, sealed inside handcrafted presentation boxes bearing our signature wax stamp.",
  },
];

function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-bg text-box-light py-10 sm:py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("home")}
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 transition-colors hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Home</span>
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-box-light/50 font-medium">
            Brand Story & Heritage
          </span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 mb-3">
            Haute Parfumerie • Kathmandu, Nepal
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            The Essence of Nepal, Bottled for the Modern Connoisseur
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-box-light/80">
            Peridot by LWE was founded with a singular conviction: to craft exceptional,
            world-class fine fragrances that draw unyielding inspiration from Nepal’s ancient
            royal courts, high mountain peaks, and sacred botanical legacy.
          </p>
        </div>

        {/* Section 1: Brand Story & Heritage Panel */}
        <div className="overflow-hidden rounded-2xl bg-box-light shadow-2xl grid md:grid-cols-2 mb-16">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-box-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-3">
              Born Under LWE
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight text-box-dark mb-6">
              A Legacy of Refinement Without Excess
            </h2>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>
                Born under the umbrella of LWE (Luxury Without Excess), PERIDOT is Nepal&apos;s
                pioneering luxury fragrance house. Inspired by the country&apos;s landscapes,
                regal history, and living heritage, it unites contemporary luxury with an
                unapologetically authentic Nepali identity.
              </p>
              <p>
                Each fragrance tells a distinct narrative. Rather than relying on generic mass-market
                blends, every scent is formulated with patience, using high-grade essences to evoke
                profound memory, confidence, and quiet elegance.
              </p>
              <p className="font-medium italic text-box-dark/95">
                &ldquo;Periidot is not merely an imported aesthetic assembled locally; it is an
                authentic reflection of Nepal, crafted for the gentleman who wears his identity with
                pride.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative min-h-72 sm:min-h-96 md:min-h-110">
            <img
              src={aboutImg}
              alt="Boudhanath Stupa and spiritual heritage of Kathmandu"
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent md:hidden" />
          </div>
        </div>

        {/* Section 2: The Three Pillars of Peridot */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
              Our Craft & Standards
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white">
              The Art of Fine Perfumery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl bg-box-dark p-8 sm:p-10 shadow-xl border border-white/5 flex flex-col justify-between hover:border-amber-400/30 transition-colors"
                >
                  <div>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-price-box text-amber-400 text-2xl shadow-inner">
                      <IconComponent />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-box-light/70">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: The Trilogy Collection */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
              Signature Creations
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white mb-4">
              The Three Chapters of Scent
            </h2>
            <p className="text-xs sm:text-sm text-box-light/70">
              Three distinct olfactory journeys, each meticulously crafted to accompany different
              moments of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureFragrances.map((perfume) => (
              <div
                key={perfume.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-box-dark border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <div className="relative h-64 sm:h-72 sm:h-80 w-full overflow-hidden bg-black/40">
                  <img
                    src={perfume.image}
                    alt={`${perfume.name} bottle`}
                    className="h-full w-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-box-dark/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 border border-white/10">
                    {perfume.badge}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-box-light mb-1">
                      {perfume.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-300/80 mb-3 italic">
                      {perfume.tagline}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wider text-box-light/60 mb-4">
                      {perfume.notes}
                    </p>
                    <p className="text-xs sm:text-sm text-box-light/75 leading-relaxed mb-6">
                      {perfume.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate(perfume.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-price-box hover:bg-[#125843] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-box-light transition-colors hover:text-amber-300"
                  >
                    <span>Discover {perfume.name}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Vision & Global Footprint */}
        <div className="rounded-2xl bg-box-dark px-6 py-14 text-center sm:px-12 sm:py-18 border border-white/10 mb-16 shadow-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Our Vision
          </p>
          <h2 className="mb-6 font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
            Nepal&apos;s Voice in Global Haute Parfumerie
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed text-box-light/75 mb-8">
            We envision an elevated standard for luxury in the Himalayas, where traditional Nepali
            aesthetic and contemporary aromatic mastery stand tall beside the venerable perfume
            houses of Paris, Milan, and Grasse.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("home", "#products")}
              className="inline-flex items-center justify-center rounded-lg bg-amber-400 hover:bg-amber-300 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-box-dark transition-colors shadow-md"
            >
              Explore All Fragrances
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("contact")}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 hover:border-amber-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-box-light hover:text-amber-300 transition-colors"
            >
              Contact Fragrance Concierge
            </button>
            <a
              href="https://wa.me/9779708050674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b221d] transition-colors shadow-md"
            >
              <FaWhatsapp className="text-base" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
