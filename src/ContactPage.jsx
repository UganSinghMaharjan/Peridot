import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import {
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const faqs = [
  {
    q: "How does delivery work in Nepal and internationally?",
    a: "Within Kathmandu Valley, orders placed before 2:00 PM are delivered within 24 hours. For other cities across Nepal, express courier takes 2 to 3 business days. Worldwide international shipping is handled via tracked air express.",
  },
  {
    q: "What is Extrait de Parfum concentration?",
    a: "Extrait de Parfum is the highest concentration of fragrance oil available in fine perfumery, containing over 30% pure aromatic oils. This ensures remarkable longevity of 12+ hours with a refined, intimate projection.",
  },
  {
    q: "Can I try a sample before committing to the full bottle?",
    a: "Yes! Every full bottle order includes a complimentary 2ml discovery spray. You can test the sample first. If it does not resonate with you, the unopened full box may be returned within 7 days for a complete refund or exchange.",
  },
  {
    q: "Can I order bespoke corporate gifts or wedding favors?",
    a: "Absolutely. We provide personalized wax-sealed gift packaging, custom message cards, and curated fragrance sets for corporate gifting, private events, and weddings. Inquire directly via our form or WhatsApp.",
  },
];

function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "Undecided / Recommendation",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsAppSend = () => {
    const text = `Hello Peridot! My name is ${formData.name || "a client"}.
I am interested in: ${formData.productInterest}.
${formData.message ? `Message: ${formData.message}` : "I would like to inquire about your fragrances."}`;
    window.open(
      `https://wa.me/9779708050674?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

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
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            <span>Return to Home</span>
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-box-light/50 font-medium">
            Concierge & Inquiries
          </span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 mb-3">
            Personal Fragrance Concierge
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            We Are Here to Assist Your Olfactory Journey
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-box-light/80">
            Whether you seek personal guidance finding your signature fragrance,
            want to arrange an order, or are looking for bespoke luxury gifting,
            our dedicated team is at your service.
          </p>
        </div>

        {/* Top 3 Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* WhatsApp Card */}
          <div className="rounded-2xl bg-box-dark p-8 shadow-xl border border-white/5 flex flex-col justify-between hover:border-amber-400/40 transition-all">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-enquiry/20 text-enquiry text-2xl">
                <FaWhatsapp />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Instant Messaging
              </p>
              <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                WhatsApp Concierge
              </h2>
              <p className="text-xs sm:text-sm text-box-light/70 mb-4 leading-relaxed">
                Connect directly with our fragrance specialists for orders,
                recommendations, and delivery updates.
              </p>
              <p className="text-sm font-semibold text-white mb-6">
                +977 9708050674
              </p>
            </div>
            <a
              href="https://wa.me/9779708050674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0b221d] transition-colors shadow-md"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl bg-box-dark p-8 shadow-xl border border-white/5 flex flex-col justify-between hover:border-amber-400/40 transition-all">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-price-box text-amber-400 text-2xl">
                <FaEnvelope />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Formal & Business
              </p>
              <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                Direct Email
              </h2>
              <p className="text-xs sm:text-sm text-box-light/70 mb-4 leading-relaxed">
                Ideal for bespoke partnerships, corporate orders, press
                inquiries, and detailed consultations.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white break-all mb-6">
                peridotbylwe.work@gmail.com
              </p>
            </div>
            <a
              href="mailto:peridotbylwe.work@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-price-box hover:bg-[#125843] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-box-light hover:text-amber-300 transition-colors"
            >
              <FaEnvelope className="text-sm text-amber-400" />
              <span>Send An Email</span>
            </a>
          </div>

          {/* Location & Atelier Card */}
          <div className="rounded-2xl bg-box-dark p-8 shadow-xl border border-white/5 flex flex-col justify-between hover:border-amber-400/40 transition-all">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-price-box text-amber-400 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
                Atelier Location
              </p>
              <h2 className="font-heading text-2xl font-semibold text-white mb-2">
                Lalitpur, Nepal
              </h2>
              <p className="text-xs sm:text-sm text-box-light/70 mb-2 leading-relaxed">
                Pulchowk, Lalitpur, Kathmandu Valley, Nepal
              </p>
              <div className="space-y-1 text-xs text-box-light/60 mb-6">
                <div className="flex items-center gap-1.5">
                  <HiOutlineClock className="text-amber-400" />
                  <span>Sunday – Friday: 10:00 AM – 7:00 PM NPT</span>
                </div>
                <div>Private consultations available upon request.</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-box-light/60">
              <span>Follow Our Atelier:</span>
              <div className="flex gap-3 text-sm text-box-light/80">
                <a
                  href="https://www.instagram.com/peridot.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/peridotbylwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <CiFacebook className="text-base" />
                </a>
                <a
                  href="https://www.tiktok.com/@peridot.np?_r=1&_t=ZS-9AURJno6h9g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section: Form & Client Care Perks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Interactive Form (Left 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-box-dark p-8 sm:p-12 shadow-2xl border border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
              Send an Inquiry
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium text-white mb-6">
              How May We Assist You?
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-box-light/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg bg-bg/80 border border-white/10 px-4 py-3 text-sm text-box-light focus:ring-1 focus:ring-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-box-light/80 mb-2">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-lg bg-bg/80 border border-white/10 px-4 py-3 text-sm text-box-light focus:ring-1 focus:ring-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-box-light/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg bg-bg/80 border border-white/10 px-4 py-3 text-sm text-box-light focus:ring-1 focus:ring-amber-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-box-light/80 mb-2">
                    Product or Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productInterest: e.target.value,
                      })
                    }
                    className="w-full rounded-lg bg-bg/80 border border-white/10 px-4 py-3 text-sm text-box-light focus:ring-1 focus:ring-amber-400 focus:outline-none transition-colors"
                  >
                    <option value="Undecided / Recommendation">
                      Undecided / Recommendation
                    </option>
                    <option value="Manaslu Extrait de Parfum">
                      Manaslu Extrait de Parfum
                    </option>
                    <option value="Mayur Extrait de Parfum">
                      Mayur Extrait de Parfum
                    </option>
                    <option value="Durbar Extrait de Parfum">
                      Durbar Extrait de Parfum
                    </option>
                    <option value="Sample Discovery Sprays">
                      Sample Discovery Sprays
                    </option>
                    <option value="Corporate / Bespoke Wedding Gifting">
                      Corporate / Bespoke Wedding Gifting
                    </option>
                    <option value="Order Status Inquiry">
                      Order Status Inquiry
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-box-light/80 mb-2">
                  Your Message / Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what scent profile you enjoy, delivery address details, or specific questions..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg bg-bg/80 border border-white/10 px-4 py-3 text-sm text-box-light focus:ring-1 focus:ring-amber-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-enquiry hover:bg-[#20ba59] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b221d] transition-colors shadow-md"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column (5 cols): Brand Guarantees & Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-box-dark p-8 shadow-xl border border-white/10">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Peridot Client Guarantee
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-box-light/75">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-400 text-lg">
                    <HiOutlineTruck />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Express Nationwide Dispatch
                    </h4>
                    <p className="text-xs text-box-light/60 mt-0.5">
                      Fast, insured courier delivery across all 7 provinces of
                      Nepal, and priority global shipping.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-400 text-lg">
                    <HiOutlineShieldCheck />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      7-Day Risk-Free Discovery
                    </h4>
                    <p className="text-xs text-box-light/60 mt-0.5">
                      Test the complimentary 2ml sample included with every
                      bottle before opening the main box.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-400 text-lg">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Personalized Fragrance Guidance
                    </h4>
                    <p className="text-xs text-box-light/60 mt-0.5">
                      Uncertain whether Manaslu, Mayur, or Durbar fits your
                      vibe? Our scent consultants are ready to assist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Link Card to Fragrances */}
            <div className="rounded-2xl bg-box-light p-8 shadow-xl text-box-dark">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-box-dark/70 mb-2">
                Explore Fragrances
              </p>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-box-dark mb-3">
                Experience the Trilogy
              </h3>
              <p className="text-xs sm:text-sm text-box-dark/80 mb-6 leading-relaxed">
                Discover our three distinct Extrait de Parfum creations crafted
                with rare accords and Himalayan inspiration.
              </p>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("manaslu")}
                  className="rounded-lg bg-box-dark text-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Manaslu
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("mayur")}
                  className="rounded-lg bg-box-dark text-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Mayur
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("durbar")}
                  className="rounded-lg bg-box-dark text-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Durbar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-box-dark p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-2">
              Common Questions
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-white/10 bg-bg/50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-base text-amber-400 font-bold ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-box-light/75 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
