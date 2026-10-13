import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi2";
import { productsData, productKeys } from "./productsData.js";

function ProductDetail({ selectedProduct = "manaslu", onSelectProduct }) {
  const currentKey =
    productsData[selectedProduct?.toLowerCase()] ? selectedProduct.toLowerCase() : "manaslu";
  const product = productsData[currentKey];

  return (
    <section id="product-details" className="py-12 scroll-mt-20">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            About This Perfume
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-normal text-box-light">
            Product Details
          </h2>

          {/* Interactive Fragrance Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {productKeys.map((key) => {
              const item = productsData[key];
              const isActive = key === currentKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSelectProduct && onSelectProduct(key)}
                  className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 text-[#0b221d] shadow-lg scale-105"
                      : "bg-box-dark text-box-light/70 border border-white/10 hover:border-amber-400 hover:text-amber-300"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card 1: Scent Story (Top Card — Image Left, Text Right) */}
        <div className="overflow-hidden rounded-2xl bg-box-light shadow-2xl grid md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-80 md:min-h-110 overflow-hidden">
            <img
              src={product.detailImg1}
              alt={`${product.name} botanicals and formulation ingredients`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* Text panel */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-box-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              {product.name}
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight text-box-dark mb-4">
              {product.tagline}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-box-dark/90 mb-5">
              {product.vibeNotes}
            </p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.desc1}</p>
              <p>{product.desc2}</p>
              <p className="font-medium italic text-box-dark/90">{product.desc3}</p>
            </div>
          </div>
        </div>

        {/* Card 2: Packaging & Care (Middle Card — Text Left, Image Right) */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-box-light shadow-2xl grid md:grid-cols-2">
          {/* Text panel */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 text-box-dark order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              Handmade Packaging & Care
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide leading-tight text-box-dark mb-5">
              The Bottle & Careful Delivery
            </h3>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.bottleNote}</p>
              <p>{product.packagingNote}</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-80 md:min-h-110 overflow-hidden order-1 md:order-2">
            <img
              src={product.detailImg2}
              alt="Peridot luxury packaging and wax seal box"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Card 3: Showcase & WhatsApp Order (Bottom Dark Card) */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-box-dark p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Gallery Left (6 cols): 1 Big Image + 2 Stacked Thumbnails */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Main Product Poster */}
              <div className="sm:col-span-2 relative min-h-85 sm:min-h-110 rounded-xl overflow-hidden bg-black/40">
                <img
                  src={product.mainImg}
                  alt={`${product.name} luxury extrait de parfum`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>

              {/* Thumbnails Stack */}
              <div className="flex flex-row sm:flex-col gap-3">
                <div className="flex-1 relative min-h-35 sm:min-h-52.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbTop}
                    alt={`${product.name} bottle detail`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex-1 relative min-h-35 sm:min-h-52.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbBottom}
                    alt={`${product.name} handcrafted paper box in Kathmandu`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Info & Purchase Right (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
                  Extrait De Parfum
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-box-light mb-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium italic text-amber-300/90 mb-5">
                  {product.subtitle}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-box-light/80 mb-6">
                  {product.desc1}
                </p>

                {/* WhatsApp Inquire Button */}
                <a
                  href={`https://wa.me/9779708050674?text=${encodeURIComponent(
                    `Hello Peridot! I would like to inquire and order the ${product.name} Extrait de Parfum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b221d] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Inquire & Order on WhatsApp</span>
                  <span className="text-base font-bold">→</span>
                </a>

                {/* Shipping info */}
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-box-light/60">
                  <HiOutlineTruck className="text-sm text-amber-400" />
                  <span>Express delivery in Nepal available • Worldwide shipping available</span>
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

        {/* Footer Tagline */}
        <p className="mt-6 text-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-box-light/40">
          • {product.heritageNote} • Handcrafted in Nepal •
        </p>
      </div>
    </section>
  );
}

export default ProductDetail;
