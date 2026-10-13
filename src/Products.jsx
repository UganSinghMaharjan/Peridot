import manasluImg from "./assets/manaslu.jpeg";
import mayurImg from "./assets/Mayur.jpeg";
import durbarImg from "./assets/durbar.png";

const products = [
  {
    name: "Manaslu",
    tagline: "A Scent of Quiet Strength.",
    img: manasluImg,
    alt: "Manaslu fragrance — snowy mountain backdrop",
    href: "#manaslu",
  },
  {
    name: "Mayur",
    tagline: "A Scent of Expression.",
    img: mayurImg,
    alt: "Mayur fragrance — peacock by the water",
    href: "#mayur",
  },
  {
    name: "Durbar",
    tagline: "The Scent of Heritage & Embers",
    img: durbarImg,
    alt: "Durbar fragrance — Nepali heritage square",
    href: "#durbar",
  },
];

function Products({ onOpenModal }) {
  return (
    <section id="products" className="py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        {/* Heading */}
        <h2 className="mb-10 text-center font-heading text-4xl text-amber-400">
          Our Products
        </h2>

        {/* Cards grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
          {products.map(({ name, tagline, img, alt }) => {
            const key = name.toLowerCase();
            return (
              <button
                key={name}
                type="button"
                onClick={() => onOpenModal && onOpenModal(key)}
                className="group relative overflow-hidden rounded-xl text-left transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] cursor-pointer"
                style={{ aspectRatio: "1/1" }}
              >
                {/* Product image */}
                <img
                  src={img}
                  alt={alt}
                  className="absolute inset-0 h-full w-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-7">
                  <p className="font-heading text-2xl font-bold uppercase tracking-widest text-amber-400 mb-1">
                    {name}
                  </p>
                  <p className="mb-4 text-sm italic text-box-light/80">
                    {tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-300 font-semibold group-hover:text-amber-200 transition-colors">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
