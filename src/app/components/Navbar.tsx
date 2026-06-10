import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import riitsLogo from "../../imports/RIITS_LOGO.jpg";

interface NavbarProps {
  lang: "zh" | "en";
  onLangToggle: () => void;
}

const navLinks = {
  zh: [
    { to: "/", label: "首頁" },
    { to: "/about", label: "關於我們" },
    { to: "/products", label: "產品系列" },
    { to: "/sustainability", label: "永續承諾" },
    { to: "/certifications", label: "認證" },
    { to: "/contact", label: "聯絡我們" },
  ],
  en: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/sustainability", label: "Sustainability" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ],
};

export function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = navLinks[lang];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-full pr-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--golden)]"
            aria-label="RIITS TRADING CO., LTD. Home"
          >
            <span
              className={`flex h-11 w-14 items-center justify-center overflow-hidden rounded-xl border p-1 shadow-sm transition-all duration-300 ${
                scrolled
                  ? "border-green-900/10 bg-white shadow-green-950/10"
                  : "border-white/35 bg-white/95 shadow-black/10"
              }`}
            >
              <img
                src={riitsLogo}
                alt="RIITS Trading logo"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`transition-colors duration-300 text-sm ${scrolled ? "text-green-900" : "text-white"}`}
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}
              >
                RIITS
              </span>
              <span
                className={`hidden sm:block pt-1 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  scrolled ? "text-green-800/70" : "text-white/70"
                }`}
              >
                Trading Co., Ltd.
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  location.pathname === link.to
                    ? scrolled
                      ? "text-green-800 bg-green-50"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-gray-700 hover:text-green-800 hover:bg-green-50"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={onLangToggle}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border transition-all duration-200 ${
                scrolled
                  ? "border-green-300 text-green-800 hover:bg-green-50"
                  : "border-white/40 text-white hover:bg-white/15"
              }`}
            >
              <Globe size={12} />
              {lang === "zh" ? "EN" : "中文"}
            </button>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-green-100 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  location.pathname === link.to
                    ? "bg-green-50 text-green-800"
                    : "text-gray-700 hover:bg-green-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
