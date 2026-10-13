import footerLogo from "./assets/footerlogo.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const links = [
  { label: "Home", page: "home", href: "/" },
  { label: "About", page: "about", href: "/about" },
  { label: "Products", page: "home", hash: "#products", href: "/#products" },
  { label: "Contact", page: "contact", href: "/contact" },
];

const year = new Date().getFullYear();

function Footer({ onNavigate }) {
  const handleLinkClick = (e, page, hash) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, hash || "");
    }
  };

  return (
    <footer className="bg-box-dark text-box-light/60">
      <div className="mx-auto flex max-w-screen-2xl flex-row flex-wrap items-center justify-between gap-x-10 gap-y-6 px-6 sm:px-10 py-6">
        <div className="flex items-center">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("home");
              }
            }}
          >
            <img
              src={footerLogo}
              alt="Peridot by LWE, Pulchwok, Lalitpur"
              className="h-16 w-auto"
            />
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col items-center gap-2"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Explore
          </h2>
          <ul className="flex flex-row items-center gap-4">
            {links.map(({ label, page, hash, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleLinkClick(e, page, hash)}
                  className="transition-colors hover:text-amber-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Contact with us
          </h2>
          <div className="flex flex-row items-center gap-4 text-box-light/70">
            <a
              href="https://www.instagram.com/peridot.np/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-amber-400"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/peridotbylwe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-amber-400"
            >
              <CiFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.tiktok.com/@peridot.np?_r=1&_t=ZS-9AURJno6h9g"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-colors hover:text-amber-400"
            >
              <FaTiktok className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-bg py-3 text-center text-xs">
        &copy; {year} Peridot by LWE. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
