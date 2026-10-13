import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineTruck, HiArrowLeft } from "react-icons/hi2";
import { productsData, productKeys } from "./productsData.js";
import Assistance from "./Assistance";

function ProductPage({ productKey = "manaslu", onNavigate }) {
  const currentKey = productKey ? productKey.toLowerCase() : "manaslu";
  const product = productsData[currentKey] || productsData.manaslu;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentKey]);

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        {/* Top Navigation Bar: Back link + Fragrance Selector */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("home")}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-box-light/70 hover:text-amber-400 transition-colors"
          >
            <HiArrowLeft className="text-sm" />
            <span>Back to Home</span>
          </button>

          {/* Fragrance Switcher */}
          {/* <div className="flex items-center gap-2.5">
            <span className="text-xs uppercase tracking-wider text-box-light/50 hidden md:inline">
              Fragrances:
            </span>
            {productKeys.map((key) => {
              const item = productsData[key];
              const isActive = key === currentKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onNavigate && onNavigate(key)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 text-[#0b221d] shadow-lg font-bold"
                      : "bg-box-dark text-box-light/70 border border-white/10 hover:border-amber-400 hover:text-amber-300"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div> */}
        </div>

        {/* Page Title */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Handcrafted Extrait De Parfum
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-box-light">
            {product.name}
          </h1>
          <p className="mt-2 text-sm italic text-amber-300/80">
            {product.subtitle}
          </p>
        </div>

        {/* Card 1: Scent Story (Top Card — Image Left, Text Right) */}
        <div className="overflow-hidden rounded-2xl bg-box-light shadow-2xl grid md:grid-cols-2">
          <div className="relative min-h-64 sm:min-h-80 md:min-h-110">
            <img
              src={product.detailImg1}
              alt={`${product.name} formulation ingredients`}
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-box-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              {product.name}
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight text-box-dark mb-4">
              {product.tagline}
            </h2>
            <p className="text-xs font-bold uppercase tracking-wider text-box-dark/90 mb-5">
              {product.vibeNotes}
            </p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.desc1}</p>
              <p>{product.desc2}</p>
              <p className="font-medium italic text-box-dark/90">
                {product.desc3}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Packaging & Care (Middle Card — Text Left, Image Right) */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-box-light shadow-2xl grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-box-dark order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              Handmade Packaging & Care
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide leading-tight text-box-dark mb-5">
              The Bottle & Careful Delivery
            </h2>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.bottleNote}</p>
              <p>{product.packagingNote}</p>
            </div>
          </div>

          <div className="relative min-h-64 sm:min-h-80 md:min-h-110 order-1 md:order-2">
            <img
              src={product.detailImg2}
              alt="Peridot packaging and wax seal box"
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 3: Showcase & WhatsApp Order (Bottom Dark Card) */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-box-dark p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Gallery Left */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 relative min-h-72 sm:min-h-110 rounded-xl overflow-hidden bg-black/40">
                <img
                  src={product.mainImg}
                  alt={`${product.name} luxury extrait de parfum`}
                  className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-row sm:flex-col gap-3">
                <div className="flex-1 relative min-h-36 sm:min-h-52.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbTop}
                    alt={`${product.name} bottle detail`}
                    className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 relative min-h-36 sm:min-h-52.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbBottom}
                    alt={`${product.name} handcrafted box`}
                    className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Info & Purchase Right */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
                  Extrait De Parfum
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-box-light mb-1">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm font-medium italic text-amber-300/90 mb-5">
                  {product.subtitle}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-box-light/80 mb-6">
                  {product.desc1}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/9779708050674?text=${encodeURIComponent(
                    `Hello Peridot! I would like to inquire and order the ${product.name} Extrait de Parfum.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b221d] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Inquire & Order on WhatsApp</span>
                  <span className="text-base font-bold">→</span>
                </a>

                {/* Delivery */}
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-box-light/60">
                  <HiOutlineTruck className="text-sm text-amber-400" />
                  <span>
                    Express delivery in Nepal available • Worldwide shipping
                    available
                  </span>
                </div>
              </div>

              {/* Scent Profile */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-box-light/60">
                  Scent Profile
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Top Notes
                    </p>
                    <p className="text-xs text-box-light/85 leading-snug">
                      {product.topNotes}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Heart Notes
                    </p>
                    <p className="text-xs text-box-light/85 leading-snug">
                      {product.heartNotes}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Base Notes
                    </p>
                    <p className="text-xs text-box-light/85 leading-snug">
                      {product.baseNotes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Tag */}
        <p className="mt-6 text-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-box-light/40">
          • {product.heritageNote} • Handcrafted in Nepal •
        </p>

        {/* Next / Prev Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("home")}
            className="text-xs font-semibold uppercase tracking-wider text-box-light/60 hover:text-amber-300 transition-colors"
          >
            ← View All Fragrances
          </button>
          <div className="flex gap-4">
            {productKeys
              .filter((k) => k !== currentKey)
              .map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => onNavigate && onNavigate(k)}
                  className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Explore {productsData[k].name} →
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Personal Assistance Section on Product Page */}
      <div className="mt-12">
        <Assistance />
      </div>
    </div>
  );
}

export default ProductPage;
