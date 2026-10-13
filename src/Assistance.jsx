import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Assistance() {
  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10">
        <div className="rounded-2xl bg-box-dark px-6 py-14 text-center sm:px-12 sm:py-18">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Personal Assistance
          </p>

          <h2 className="mb-4 font-heading text-3xl font-normal text-box-light sm:text-4xl lg:text-5xl">
            Have Questions? Need Help Choosing?
          </h2>

          <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-box-light/60">
            Chat directly with our team on WhatsApp or send us an email. We will
            guide you to find the right fragrance for you or a gift.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://wa.me/9779708050674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-price-box px-5 py-3 text-xs font-medium uppercase tracking-wider text-box-light transition-all duration-300 hover:bg-[#125843] hover:text-amber-300"
            >
              <FaWhatsapp className="text-base text-amber-400" />
              <span>WHATSAPP: +977 9708050674</span>
            </a>

            <a
              href="mailto:peridotbylwe.work@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-lg bg-price-box px-5 py-3 text-xs font-medium uppercase tracking-wider text-box-light transition-all duration-300 hover:bg-[#125843] hover:text-amber-300"
            >
              <FaEnvelope className="text-base text-amber-400" />
              <span>EMAIL: peridotbylwe.work@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assistance;
