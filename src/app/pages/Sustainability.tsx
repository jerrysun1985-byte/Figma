import { motion } from "motion/react";
import { Leaf, Droplets, Recycle, Sun, Wind, CheckCircle2 } from "lucide-react";
import { useLang } from "../LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function SustainabilityPage() {
  const { lang } = useLang();
  const t = {
    zh: {
      heroTitle: "永續承諾",
      heroSub: "Our Sustainability Commitment",
      heroDesc: "RIITS 將環境永續視為核心經營理念，從產品選型到工藝建議，全面落實減少染色製程對環境的衝擊。",
      pillarsTitle: "環保行動四大支柱",
      pillars: [
        {
          icon: Droplets,
          title: "降低水污染",
          desc: "推廣 ZDHC 合規染料與助劑，提供生物可分解助劑（如 Goldenaux® D-LVDN，COD ≤ 500），協助染廠降低廢水中有害物質。",
          stats: "COD ≤ 500",
          statsLabel: "生物可分解助劑",
        },
        {
          icon: Recycle,
          title: "節能減碳",
          desc: "Goldenaux® F-PM（bluesign® 認證清缸劑）可將浴量減少至原來的 1/2 至 1/3，同步降低能耗與藥劑用量，實現節能減碳。",
          stats: "50-67%",
          statsLabel: "可降低浴量",
        },
        {
          icon: Sun,
          title: "無害化學品",
          desc: "推廣無金屬酸性染料（Goldenacid® M、SF）及不含苯酚/雙酚/甲醛的環保固色劑（Goldenaux® ASF BS），符合 OEKO-TEX 100。",
          stats: "Zero",
          statsLabel: "苯酚/甲醛",
        },
        {
          icon: Wind,
          title: "bluesign® 認證",
          desc: "積極推廣 bluesign® 認證產品，確保生產過程中對環境、工人安全及消費者健康的影響降至最低。",
          stats: "bluesign®",
          statsLabel: "國際認可認證",
        },
      ],
      standardsTitle: "符合的國際環保規範",
      standards: [
        { name: "ZDHC MRSL", desc: "零有害排放化學品計劃，確保製程中不使用有害化學物質" },
        { name: "OEKO-TEX® Standard 100", desc: "紡織品有害物質檢測認證，消費者安全保障" },
        { name: "bluesign®", desc: "紡織品永續生產認證，涵蓋環境、工安與化學品管理" },
        { name: "ISO 14001:2015", desc: "環境管理系統國際標準，系統化管理環境影響" },
        { name: "REACH", desc: "歐盟化學品法規，確保在歐洲市場銷售的化學品安全" },
        { name: "RSL/MRSL", desc: "限用物質清單，協助客戶符合品牌採購要求" },
      ],
      ecoProductsTitle: "環保產品亮點",
      ecoProducts: [
        { name: "Goldenacid® SF", badge: "Metal-free", desc: "不含金屬的酸性染料，最高濕牢度，環境友善" },
        { name: "Goldenacid® M", badge: "Metal-free", desc: "不含金屬縮絨型染料，鮮豔色彩，低環境負擔" },
        { name: "Goldenaux® F-PM", badge: "bluesign®", desc: "bluesign® 認證清缸劑，節能減碳，廢水友善" },
        { name: "Goldenaux® ASF BS", badge: "OEKO-TEX 100", desc: "無苯酚/雙酚/甲醛環保固色劑，符合 OEKO-TEX 100" },
        { name: "Goldenaux® D-LVDN", badge: "Biodegradable", desc: "生物可分解均染劑，COD ≤ 500，廢水負荷低" },
        { name: "Goldenaux® D-TP", badge: "Biodegradable", desc: "生物可分解兩性均染劑，優異移染性，環保配方" },
      ],
    },
    en: {
      heroTitle: "Sustainability",
      heroSub: "Our Sustainability Commitment",
      heroDesc: "RIITS treats environmental sustainability as a core business principle — from product selection to process recommendations, we work to minimize the environmental impact of dyeing processes.",
      pillarsTitle: "Four Pillars of Eco Action",
      pillars: [
        {
          icon: Droplets,
          title: "Reducing Water Pollution",
          desc: "Promoting ZDHC-compliant dyes and auxiliaries. Offering biodegradable auxiliaries (e.g., Goldenaux® D-LVDN, COD ≤ 500) to help dyehouses reduce harmful substances in wastewater.",
          stats: "COD ≤ 500",
          statsLabel: "Biodegradable Auxiliaries",
        },
        {
          icon: Recycle,
          title: "Energy & Carbon Reduction",
          desc: "Goldenaux® F-PM (bluesign® certified machine cleaner) can reduce liquor ratio to 1/2 to 1/3 of the original, simultaneously cutting energy consumption and chemical usage.",
          stats: "50-67%",
          statsLabel: "Liquor Ratio Reduction",
        },
        {
          icon: Sun,
          title: "Hazard-Free Chemicals",
          desc: "Promoting metal-free acid dyes (Goldenacid® M, SF) and fixing agents free from phenol/bisphenol/formaldehyde (Goldenaux® ASF BS), compliant with OEKO-TEX 100.",
          stats: "Zero",
          statsLabel: "Phenol / Formaldehyde",
        },
        {
          icon: Wind,
          title: "bluesign® Certification",
          desc: "Actively promoting bluesign® certified products, ensuring minimum impact on the environment, worker safety, and consumer health throughout production.",
          stats: "bluesign®",
          statsLabel: "Globally Recognized",
        },
      ],
      standardsTitle: "International Standards Compliance",
      standards: [
        { name: "ZDHC MRSL", desc: "Zero Discharge of Hazardous Chemicals — ensuring no harmful chemicals are used in the process" },
        { name: "OEKO-TEX® Standard 100", desc: "Testing for harmful substances in textiles — consumer safety guarantee" },
        { name: "bluesign®", desc: "Sustainable textile production certification covering environment, worker safety, and chemical management" },
        { name: "ISO 14001:2015", desc: "International standard for environmental management systems — systematic management of environmental impact" },
        { name: "REACH", desc: "EU chemical regulation ensuring safety of chemicals sold in the European market" },
        { name: "RSL/MRSL", desc: "Restricted Substances List — helping clients comply with brand sourcing requirements" },
      ],
      ecoProductsTitle: "Eco Product Highlights",
      ecoProducts: [
        { name: "Goldenacid® SF", badge: "Metal-free", desc: "Metal-free acid dye with highest wet fastness and eco-friendly profile" },
        { name: "Goldenacid® M", badge: "Metal-free", desc: "Metal-free milling acid dye — brilliant colors, low environmental burden" },
        { name: "Goldenaux® F-PM", badge: "bluesign®", desc: "bluesign® certified machine cleaner — energy saving and wastewater friendly" },
        { name: "Goldenaux® ASF BS", badge: "OEKO-TEX 100", desc: "Eco fixing agent free from phenol/bisphenol/formaldehyde — OEKO-TEX 100 compliant" },
        { name: "Goldenaux® D-LVDN", badge: "Biodegradable", desc: "Biodegradable leveling agent with COD ≤ 500 — low wastewater burden" },
        { name: "Goldenaux® D-TP", badge: "Biodegradable", desc: "Biodegradable amphoteric leveling agent — eco formula with excellent migration" },
      ],
    },
  }[lang];

  const badgeColors: Record<string, string> = {
    "Metal-free": "var(--forest-light)",
    "bluesign®": "var(--forest-dark)",
    "OEKO-TEX 100": "var(--forest-mid)",
    "Biodegradable": "#52B788",
  };

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: "var(--leaf-green)", transform: "translate(-30%, -30%)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full" style={{ background: "var(--golden)", transform: "translate(30%, 30%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs border border-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)" }}>
              <Leaf size={12} />
              {lang === "zh" ? "ISO 14001 · bluesign® · ZDHC" : "ISO 14001 · bluesign® · ZDHC"}
            </div>
            <h1 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {t.heroTitle}
            </h1>
            <p className="text-green-100/80 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              {t.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.pillarsTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-7 rounded-2xl border hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--secondary)" }}>
                    <pillar.icon size={22} style={{ color: "var(--forest-light)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)", fontSize: "1.05rem" }}>
                        {pillar.title}
                      </h3>
                      <div className="text-right">
                        <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-light)", fontSize: "1rem" }}>
                          {pillar.stats}
                        </div>
                        <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{pillar.statsLabel}</div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20" style={{ background: "var(--natural-white)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.standardsTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.standards.map((s, i) => (
              <motion.div
                key={s.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-5 bg-white rounded-2xl border hover:shadow-md transition-all"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--forest-light)" }} />
                  <div>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)", fontSize: "0.9rem" }} className="mb-1">
                      {s.name}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.ecoProductsTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.ecoProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-5 rounded-2xl border hover:shadow-md transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "0.95rem" }}>
                    {p.name}
                  </h3>
                  <span className="text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 ml-2"
                    style={{ background: badgeColors[p.badge] || "var(--forest-light)" }}>
                    <Leaf size={10} />
                    {p.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
