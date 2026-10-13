import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import ProductModal from "./ProductModal.jsx";
import ProductPage from "./ProductPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import Footer from "./Footer.jsx";

const VALID_PAGES = ["about", "contact", "manaslu", "mayur", "durbar"];

const getInitialPage = () => {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.replace(/^\//, "").toLowerCase();
  if (VALID_PAGES.includes(path)) return path;
  const hash = window.location.hash.toLowerCase().replace("#", "").replace("/", "");
  if (VALID_PAGES.includes(hash)) return hash;
  return "home";
};

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigateTo = (page, hash = "") => {
    if (page === "home") {
      setCurrentPage("home");
      const targetUrl = hash ? `/${hash}` : "/";
      window.history.pushState({}, "", targetUrl);

      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setCurrentPage(page);
      window.history.pushState({}, "", `/${page}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentPage === "home" && (
          <Landing onOpenModal={(productKey) => setModalProduct(productKey)} />
        )}
        {currentPage === "about" && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === "contact" && (
          <ContactPage onNavigate={navigateTo} />
        )}
        {["manaslu", "mayur", "durbar"].includes(currentPage) && (
          <ProductPage productKey={currentPage} onNavigate={navigateTo} />
        )}
      </main>

      {/* Pop-up modal for individual products opened from the landing page */}
      <ProductModal
        isOpen={Boolean(modalProduct)}
        productKey={modalProduct}
        onClose={() => setModalProduct(null)}
        onNavigateToPage={(key) => navigateTo(key)}
      />

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
