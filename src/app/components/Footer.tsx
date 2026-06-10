import { Link } from "react-router";
import { Phone, Mail, Globe, Leaf } from "lucide-react";
import riitsLogo from "../../imports/RIITS_LOGO.jpg";

interface FooterProps {
  lang: "zh" | "en";
}

export function Footer({ lang }: FooterProps) {
  const t = {
    zh: {
      tagline: "永續染色解決方案",
      products: "產品系列",
      company: "公司",
      about: "關於我們",
      sustainability: "永續承諾",
      certifications: "認證",
      contact: "聯絡我們",
      acidDyes: "酸性染料",
      metalDyes: "含金染料",
      disperse: "分散染料",
      auxiliaries: "紡織助劑",
      rights: "版權所有",
    },
    en: {
      tagline: "Sustainable Dyeing Solutions",
      products: "Products",
      company: "Company",
      about: "About Us",
      sustainability: "Sustainability",
      certifications: "Certifications",
      contact: "Contact",
      acidDyes: "Acid Dyes",
      metalDyes: "Metal-Complex Dyes",
      disperse: "Disperse Dyes",
      auxiliaries: "Auxiliaries",
      rights: "All Rights Reserved",
    },
  }[lang];

  return (
    <footer style={{ background: "var(--forest-dark)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 inline-flex items-center gap-3 group" aria-label="RIITS TRADING CO., LTD. Home">
              <span className="flex h-14 w-[4.5rem] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white p-1.5 shadow-lg shadow-black/15">
                <img
                  src={riitsLogo}
                  alt="RIITS Trading logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>
                  RIITS
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-green-200/80">Trading Co., Ltd.</span>
              </span>
            </Link>
            <p className="text-green-200 text-sm mb-4">{t.tagline}</p>
            <div className="flex flex-col gap-2 text-sm text-green-200">
              <a href="tel:+886223612328" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                +886-2-2361-2328
              </a>
              <a href="mailto:riits@ms10.hinet.net" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                riits@ms10.hinet.net
              </a>
              <a href="https://www.riits.com.tw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe size={14} />
                www.riits.com.tw
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              {t.products}
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: t.acidDyes, to: "/products" },
                { label: t.metalDyes, to: "/products" },
                { label: t.disperse, to: "/products" },
                { label: t.auxiliaries, to: "/products" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-green-200 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              {t.company}
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: t.about, to: "/about" },
                { label: t.sustainability, to: "/sustainability" },
                { label: t.certifications, to: "/certifications" },
                { label: t.contact, to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-green-200 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications badges */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              {lang === "zh" ? "認證標章" : "Certifications"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {["ISO 9001", "ISO 14001", "bluesign®", "ZDHC"].map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded-full text-xs border border-white/20 text-green-200"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-300 text-xs">
            © 2025 RIITS TRADING CO., LTD. {t.rights}
          </p>
          <div className="flex items-center gap-1.5">
            <Leaf size={12} className="text-green-400" />
            <span className="text-green-300 text-xs">
              {lang === "zh" ? "環境友善，永續未來" : "Eco-Friendly & Sustainable Future"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
