import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineTruck, HiXMark } from "react-icons/hi2";
import { productsData } from "./productsData.js";

function ProductModal({ isOpen, productKey, onClose, onNavigateToPage }) {
  const currentKey = productKey ? productKey.toLowerCase() : "manaslu";
  const product = productsData[currentKey] || productsData.manaslu;

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 md:p-10 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-6xl rounded-3xl bg-[#092b22] border border-white/10 shadow-2xl p-5 sm:p-8 lg:p-10 my-4 text-box-light"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
              Fragrance Detail
            </span>
            <span className="text-white/30">•</span>
            <span className="text-sm font-heading text-box-light font-bold">
              {product.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onNavigateToPage && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToPage(currentKey);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-amber-200 transition-colors"
              >
                <span>Open Full Page</span>
                <span>↗</span>
              </button>
            )}

            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-box-light/80 transition-colors hover:bg-white/20 hover:text-amber-300"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Card 1: Scent Story (Image Left, Text Right) */}
        <div className="overflow-hidden rounded-2xl bg-box-light shadow-xl grid md:grid-cols-2">
          <div className="relative min-h-60 sm:min-h-75 md:min-h-100">
            <img
              src={product.detailImg1}
              alt={`${product.name} ingredients`}
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 text-box-dark">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              {product.name}
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide leading-tight text-box-dark mb-3">
              {product.tagline}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-box-dark/90 mb-4">
              {product.vibeNotes}
            </p>
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.desc1}</p>
              <p>{product.desc2}</p>
              <p className="font-medium italic text-box-dark/90">{product.desc3}</p>
            </div>
          </div>
        </div>

        {/* Card 2: Packaging & Care (Text Left, Image Right) */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-box-light shadow-xl grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-10 text-box-dark order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
              Handmade Packaging & Care
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-wide leading-tight text-box-dark mb-4">
              The Bottle & Careful Delivery
            </h3>
            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-box-dark/80">
              <p>{product.bottleNote}</p>
              <p>{product.packagingNote}</p>
            </div>
          </div>

          <div className="relative min-h-60 sm:min-h-75 md:min-h-100 order-1 md:order-2">
            <img
              src={product.detailImg2}
              alt="Peridot packaging and wax seal box"
              className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 3: Showcase & WhatsApp Order (Dark Card) */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-box-dark p-6 sm:p-8 lg:p-10 shadow-xl border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Gallery Left */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="sm:col-span-2 relative min-h-64 sm:min-h-75 sm:min-h-100 rounded-xl overflow-hidden bg-black/40">
                <img
                  src={product.mainImg}
                  alt={`${product.name} perfume`}
                  className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-row sm:flex-col gap-2.5">
                <div className="flex-1 relative min-h-32 sm:min-h-32.5 sm:min-h-47.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbTop}
                    alt={`${product.name} bottle`}
                    className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 relative min-h-32 sm:min-h-32.5 sm:min-h-47.5 rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={product.thumbBottom}
                    alt={`${product.name} packaging`}
                    className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Info & Purchase Right */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-1">
                  Extrait De Parfum
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-wider text-box-light mb-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium italic text-amber-300/90 mb-4">
                  {product.subtitle}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-box-light/80 mb-5">
                  {product.desc1}
                </p>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/9779708050674?text=${encodeURIComponent(
                    `Hello Peridot! I would like to inquire and order the ${product.name} Extrait de Parfum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b221d] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Inquire & Order on WhatsApp</span>
                  <span className="text-base font-bold">→</span>
                </a>

                {/* Delivery */}
                <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-box-light/60">
                  <HiOutlineTruck className="text-sm text-amber-400" />
                  <span>Express delivery in Nepal • Worldwide shipping</span>
                </div>
              </div>

              {/* Scent Profile */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-box-light/60">
                  Scent Profile
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Top Notes
                    </p>
                    <p className="text-[11px] text-box-light/85 leading-snug">
                      {product.topNotes}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Heart Notes
                    </p>
                    <p className="text-[11px] text-box-light/85 leading-snug">
                      {product.heartNotes}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0e3027] border border-white/5 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                      Base Notes
                    </p>
                    <p className="text-[11px] text-box-light/85 leading-snug">
                      {product.baseNotes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-box-light/40">
          • {product.heritageNote} • Handcrafted in Nepal •
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
