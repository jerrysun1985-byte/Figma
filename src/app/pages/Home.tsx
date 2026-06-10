import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Shield, Zap, Award, ChevronRight } from "lucide-react";
import { useLang } from "../LangContext";

const translations = {
  zh: {
    heroTitle: "永續染色，\n精彩色彩",
    heroSub: "RIITS TRADING CO., LTD.",
    heroDesc: "專注紡織染料與助劑貿易，以 ISO 14001 環境管理與 bluesign® 認證為核心，提供環境友善的高性能染色解決方案。",
    learnMore: "探索產品",
    contactUs: "聯絡我們",
    certBadge: "ISO 14001 · bluesign® · ZDHC 認證",
    valueTitle: "我們的核心承諾",
    quality: "品質保證",
    qualityDesc: "ISO 9001:2015 認證，嚴格的品質管理確保每批產品的一致性與可靠性。",
    eco: "環境友善",
    ecoDesc: "ISO 14001:2015 環境管理系統，bluesign® 認證，減少染色製程對環境的衝擊。",
    innovation: "技術創新",
    innovDesc: "Goldenacid®、Goldenlan®、Goldenset® 等自主品牌，提供業界最齊全的染色解決方案。",
    compliance: "法規合規",
    complianceDesc: "符合 ZDHC、OEKO-TEX 100 等國際規範，助客戶通過各項環保認證稽核。",
    productsTitle: "主要產品系列",
    products: [
      { name: "Goldenacid®", type: "酸性染料", desc: "尼龍/聚醯胺用，色域寬廣，含環保無金屬系列", tag: "Metal-free 可選" },
      { name: "Goldenlan®", type: "含金複合染料", desc: "1:2 金屬複合染料，極高光牢度，汽車用布首選", tag: "高日光牢度" },
      { name: "Goldenset®", type: "複合改良染料", desc: "1:2 金屬複合改良型，超細纖維最佳選擇", tag: "運動服適用" },
      { name: "Goldenaux®", type: "紡織助劑", desc: "均染、固色、清缸等全系列助劑，bluesign® 認證", tag: "bluesign® 認證" },
    ],
    viewAll: "查看所有產品",
    statLabel1: "產品系列",
    statLabel2: "國際認證",
    statLabel3: "服務國家",
    statLabel4: "環保產品",
    ctaTitle: "攜手實現永續染色未來",
    ctaDesc: "RIITS 提供從染料選型到工藝優化的完整技術支援，協助您達成環保目標與品質要求。",
    ctaBtn: "立即聯絡我們",
  },
  en: {
    heroTitle: "Sustainable Dyeing,\nVibrant Colors",
    heroSub: "RIITS TRADING CO., LTD.",
    heroDesc: "Specializing in textile dyes and auxiliaries with ISO 14001 environmental management and bluesign® certification at our core. We deliver eco-friendly, high-performance dyeing solutions.",
    learnMore: "Explore Products",
    contactUs: "Contact Us",
    certBadge: "ISO 14001 · bluesign® · ZDHC Certified",
    valueTitle: "Our Core Commitments",
    quality: "Quality Assurance",
    qualityDesc: "ISO 9001:2015 certified. Strict quality management ensures consistency and reliability in every batch.",
    eco: "Eco-Friendly",
    ecoDesc: "ISO 14001:2015 environmental management system and bluesign® certification minimize the environmental impact of dyeing processes.",
    innovation: "Technical Innovation",
    innovDesc: "Proprietary brands Goldenacid®, Goldenlan®, Goldenset® offer the most comprehensive dyeing solutions in the industry.",
    compliance: "Regulatory Compliance",
    complianceDesc: "Compliant with ZDHC, OEKO-TEX 100 and other international standards, helping clients pass eco-audit certifications.",
    productsTitle: "Key Product Lines",
    products: [
      { name: "Goldenacid®", type: "Acid Dyes", desc: "For Nylon/Polyamide — wide color range with eco metal-free options", tag: "Metal-free options" },
      { name: "Goldenlan®", type: "Metal-Complex Dyes", desc: "1:2 metal-complex dyes with very high light fastness, ideal for automotive", tag: "High light fastness" },
      { name: "Goldenset®", type: "Modified Dyes", desc: "1:2 metal-complex modified dyes, best for microfiber and sportswear", tag: "Sportswear" },
      { name: "Goldenaux®", type: "Auxiliaries", desc: "Full range of leveling, fixing, and cleaning auxiliaries — bluesign® certified", tag: "bluesign® Certified" },
    ],
    viewAll: "View All Products",
    statLabel1: "Product Lines",
    statLabel2: "Certifications",
    statLabel3: "Countries Served",
    statLabel4: "Eco Products",
    ctaTitle: "Partner with Us for a Sustainable Future",
    ctaDesc: "RIITS provides complete technical support from dye selection to process optimization, helping you achieve both environmental and quality goals.",
    ctaBtn: "Get in Touch",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function HomePage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="min-h-screen" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest-mid) 50%, var(--forest-light) 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: "var(--golden)" }} />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: "var(--leaf-green)" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs border border-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>
              <Leaf size={12} />
              {t.certBadge}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-4 whitespace-pre-line"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.15 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-green-200 text-sm mb-3 tracking-widest uppercase"
          >
            {t.heroSub}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-green-100/80 max-w-2xl mx-auto mb-10"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "var(--golden)", color: "var(--forest-dark)", fontWeight: 600 }}
            >
              {t.learnMore} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
            >
              {t.contactUs}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { value: "4+", label: t.statLabel1 },
              { value: "4", label: t.statLabel2 },
              { value: "20+", label: t.statLabel3 },
              { value: "60%+", label: t.statLabel4 },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-white mb-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "2rem" }}>
                  {s.value}
                </div>
                <div className="text-green-200 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "2rem" }}>
              {t.valueTitle}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: t.quality, desc: t.qualityDesc, color: "var(--forest-dark)" },
              { icon: Leaf, title: t.eco, desc: t.ecoDesc, color: "var(--forest-light)" },
              { icon: Zap, title: t.innovation, desc: t.innovDesc, color: "var(--golden)" },
              { icon: Award, title: t.compliance, desc: t.complianceDesc, color: "var(--forest-mid)" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}18` }}>
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)", fontSize: "1rem" }} className="mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-20" style={{ background: "var(--natural-white)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
          >
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "2rem" }}>
              {t.productsTitle}
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm transition-colors hover:gap-3"
              style={{ color: "var(--forest-light)", fontWeight: 500 }}
            >
              {t.viewAll} <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.products.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
              >
                <Link
                  to="/products"
                  className="block p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ background: "white", border: "1px solid var(--border)" }}
                >
                  <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>{p.type}</p>
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.1rem" }} className="mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                    {p.desc}
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "var(--secondary)", color: "var(--forest-dark)" }}>
                    {p.tag}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <Leaf size={32} className="mx-auto mb-4 text-green-300" />
            <h2 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.8rem" }}>
              {t.ctaTitle}
            </h2>
            <p className="text-green-200 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm transition-all hover:scale-105"
              style={{ background: "var(--golden)", color: "var(--forest-dark)", fontWeight: 600 }}
            >
              {t.ctaBtn} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
