import { useState } from "react";
import logo from "./assets/logo.png";

const links = [
  { label: "About", id: "about" },
  { label: "Manaslu", id: "manaslu" },
  { label: "Mayur", id: "mayur" },
  { label: "Durbar", id: "durbar" },
  { label: "Contact", id: "contact" },
];

function Navbar({ currentPage = "home", onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
    setOpen(false);
  };

  const isLinkActive = (id) => {
    return currentPage === id;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-bg bg-box-dark/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 sm:px-10 py-1"
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate("home");
          }}
        >
          <img src={logo} alt="Peridot by LWE" className="h-24 w-auto" />
        </a>

        <ul className="hidden gap-12 text-box-light/80 md:flex">
          {links.map(({ label, id }) => {
            const isSelected = isLinkActive(id);
            const destinationUrl = `/${id}`;

            return (
              <li key={label}>
                <a
                  href={destinationUrl}
                  onClick={(e) => handleLinkClick(e, id)}
                  className={`transition-colors ${
                    isSelected
                      ? "font-bold text-amber-300 underline underline-offset-8 decoration-2 decoration-amber-400"
                      : "hover:text-amber-300"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-box-light/80 hover:text-amber-300 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-bg px-6 py-3 text-box-light/80 md:hidden">
          {links.map(({ label, id }) => {
            const isSelected = isLinkActive(id);
            const destinationUrl = `/${id}`;

            return (
              <li key={label}>
                <a
                  href={destinationUrl}
                  onClick={(e) => handleLinkClick(e, id)}
                  className={`block py-2 transition-colors ${
                    isSelected
                      ? "font-bold text-amber-300 underline underline-offset-4 decoration-2 decoration-amber-400"
                      : "hover:text-amber-300"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
