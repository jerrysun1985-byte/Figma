import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, CheckCircle2, PlayCircle } from "lucide-react";
import { useLang } from "../LangContext";

type Category = "acid" | "metal" | "modified" | "disperse" | "auxiliaries";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const categories = {
  zh: [
    { id: "acid" as Category, label: "酸性染料", sub: "Acid Dyes" },
    { id: "metal" as Category, label: "含金複合染料", sub: "Metal-Complex Dyes" },
    { id: "modified" as Category, label: "複合改良染料", sub: "Modified Dyes" },
    { id: "disperse" as Category, label: "分散染料", sub: "Disperse Dyes" },
    { id: "auxiliaries" as Category, label: "紡織助劑", sub: "Auxiliaries" },
  ],
  en: [
    { id: "acid" as Category, label: "Acid Dyes", sub: "酸性染料" },
    { id: "metal" as Category, label: "Metal-Complex Dyes", sub: "含金複合染料" },
    { id: "modified" as Category, label: "Modified Dyes", sub: "複合改良染料" },
    { id: "disperse" as Category, label: "Disperse Dyes", sub: "分散染料" },
    { id: "auxiliaries" as Category, label: "Auxiliaries", sub: "紡織助劑" },
  ],
};

const products = {
  acid: [
    {
      name: "Goldenacid® L",
      type: { zh: "均染型", en: "Levelling Type" },
      features: {
        zh: ["淺色系高日光牢度", "優良均染性與移染性", "無阻染效果", "適用尼龍地毯、襪類"],
        en: ["High light fastness in pale shades", "Excellent leveling & migration", "No blocking effects", "For carpet & hosiery"],
      },
      tags: ["Levelling", "Nylon", "Pale Shade"],
      eco: false,
    },
    {
      name: "Goldenacid® HM",
      type: { zh: "半縮絨型", en: "Half-Milling Type" },
      features: {
        zh: ["色相鮮豔，色域寬廣", "優良均染性和移染性", "濕潤堅牢度良好", "淺至中色適用"],
        en: ["Brilliant color, wide color range", "Excellent leveling & migration", "High wet fastness", "For pale to medium shade"],
      },
      tags: ["Half-Milling", "Nylon", "Wide Range"],
      eco: false,
    },
    {
      name: "Goldenacid® M",
      type: { zh: "縮絨型", en: "Milling Type" },
      features: {
        zh: ["非常鮮豔，色域寬廣（運動服）", "高濕牢度及良好光牢度", "不含金屬染料", "適用於運動服"],
        en: ["Very brilliant (esp. sportswear)", "High wet & good light fastness", "Metal-free dyestuff", "Suitable for sportswear"],
      },
      tags: ["Milling", "Metal-free", "Sportswear"],
      eco: true,
      ecoLabel: "Metal-free",
    },
    {
      name: "Goldenacid® SF",
      type: { zh: "複合型 (環保)", en: "SF Type (Eco-friendly)" },
      features: {
        zh: ["最高濕牢度", "完美配伍性", "不含金屬染料", "環保型染料", "無阻染效果"],
        en: ["Highest wet fastness", "Perfect combinability", "Metal-free dyestuff", "Eco-friendly", "No blocking effects"],
      },
      tags: ["SF Type", "Metal-free", "Ecofriendly"],
      eco: true,
      ecoLabel: "Ecofriendly",
    },
    {
      name: "Goldenacid® SPN",
      type: { zh: "酸性反應型", en: "Acid Reactive Type" },
      features: {
        zh: ["高堅牢度需求成衣用布", "中、深色相適用", "優良的濕潤堅牢度", "PA/PU 混紡適用"],
        en: ["For garment fabric with high fastness", "Medium to deep shade", "Superior wet fastness", "Suitable for PA/PU blends"],
      },
      tags: ["Reactive", "PA/PU", "Deep Shade"],
      eco: false,
    },
  ],
  metal: [
    {
      name: "Goldenlan® K",
      type: { zh: "1:2 不含磺酸根", en: "1:2 Non-sulphonated" },
      features: {
        zh: ["淺至中色使用", "非常好的配伍性", "非常高的光牢度", "特別適用於汽車用布"],
        en: ["Pale to medium shade", "Very good combinability", "Very high light fastness", "Especially for automotive"],
      },
      tags: ["1:2 Metal Complex", "Automotive", "High Lightfastness"],
      eco: false,
    },
    {
      name: "Goldenlan® S",
      type: { zh: "1:2 單磺酸根", en: "1:2 One-sulphonated" },
      features: {
        zh: ["中色相適用", "優良濕潤堅牢度", "良好日光牢度", "PA/PU、CO/PA、PES/PA 混紡適用"],
        en: ["Suitable for medium shade", "Superior wet fastness", "Good light fastness", "For PA/PU, CO/PA, PES/PA blends"],
      },
      tags: ["1:2 Metal Complex", "Medium Shade", "Blends"],
      eco: false,
    },
    {
      name: "Goldenlan® 2S",
      type: { zh: "1:2 雙磺酸根", en: "1:2 Two-sulphonated" },
      features: {
        zh: ["特深色使用", "最高濕牢度", "非常高的光牢度", "可與縮絨型酸性染料併用"],
        en: ["For deep to very dark shades", "Top wet fastness", "Very high light fastness", "Combinable with Milling dyes"],
      },
      tags: ["1:2 Metal Complex", "Deep Shade", "Top Fastness"],
      eco: false,
    },
  ],
  modified: [
    {
      name: "Goldenset®",
      type: { zh: "1:2 金屬複合改良型", en: "Modified 1:2 Metal Complex" },
      features: {
        zh: ["中至特深色組合", "優良配伍性，易配色", "超細纖維染色最佳", "可省略後處理固色", "寬廣色域，運動服、羽絨服、泳衣"],
        en: ["Medium to dark rich color", "Very good combinability", "Best for microfiber", "Often no after-treatment needed", "Sportswear, down jacket, swimwear"],
      },
      tags: ["Modified", "Microfiber", "Sportswear"],
      eco: false,
    },
    {
      name: "Goldenset® PN",
      type: { zh: "超細纖維專用", en: "For Microfiber PA" },
      features: {
        zh: ["1:2 含金染料混合特殊含金染料", "非常適用於尼龍超細纖維", "PA/彈性纖維運動服適用", "深色系適用"],
        en: ["1:2 metal dyes with special metal dyes", "Outstanding for microfiber polyamide", "PA/Elastic sportswear", "For deep shade"],
      },
      tags: ["Microfiber", "PA/EL", "Deep Shade"],
      eco: false,
    },
  ],
  disperse: [
    {
      name: "Disperse Dyes",
      type: { zh: "分散染料系列", en: "Disperse Dye Range" },
      features: {
        zh: ["聚酯纖維（PET）染色專用", "色域寬廣，各深淺色系齊全", "高溫高壓染色及熱熔染色均適用", "優異的各項堅牢度"],
        en: ["For polyester (PET) dyeing", "Wide color range, all shades available", "For HT dyeing and thermosol", "Excellent all-round fastness"],
      },
      tags: ["Polyester", "PET", "Full Range"],
      eco: false,
    },
  ],
  auxiliaries: [
    {
      name: "Goldenaux® D-TP",
      type: { zh: "兩性離子均染劑", en: "Amphoteric Leveling Agent" },
      features: {
        zh: ["兩性離子均染劑", "極佳移染性", "可改善橫條問題", "COD ≤ 500，生物可分解", "亦可作剝色劑使用"],
        en: ["Amphoteric leveling agent", "Excellent migration", "Improves barriness", "COD ≤ 500, biodegradable", "Also usable as stripping agent"],
      },
      tags: ["Leveling", "Biodegradable", "Eco"],
      eco: true,
      ecoLabel: "Biodegradable",
    },
    {
      name: "Goldenaux® ASF BS",
      type: { zh: "環保固色劑", en: "Eco Fixing Agent" },
      features: {
        zh: ["完全不含苯酚、雙酚及甲醛", "符合 OEKO-TEX 100", "顯著提升水洗、耐水、耐汗牢度", "可用於螢光及敏感色"],
        en: ["Phenol/bisphenol/formaldehyde free", "OEKO-TEX 100 compliant", "Improves washing, water & sweat fastness", "For fluorescent & sensitive dyes"],
      },
      tags: ["Fixing Agent", "OEKO-TEX 100", "Eco"],
      eco: true,
      ecoLabel: "OEKO-TEX 100",
    },
    {
      name: "Goldenaux® F-PM",
      type: { zh: "環保泡沫清缸劑", en: "Eco Foam Machine Cleaner" },
      features: {
        zh: ["bluesign® 認證環保產品", "降低浴量及藥劑量（節能減碳）", "安全不傷缸體", "廢水處理簡易"],
        en: ["bluesign® certified eco product", "Reduces liquor ratio & chemicals (lower carbon)", "Safe for machines", "Easy wastewater treatment"],
      },
      tags: ["bluesign®", "Eco", "Energy Saving"],
      eco: true,
      ecoLabel: "bluesign®",
    },
    {
      name: "Goldenaux® F-TWE",
      type: { zh: "低溫鍵合固色劑", en: "Low-Temp Bonding Agent" },
      features: {
        zh: ["低溫處理即可提升儲存牢度", "不影響日曬牢度", "高耐濕牢度", "陽離子特性"],
        en: ["Improves storage fastness at low temp", "No influence on light fastness", "High wet fastness", "Cationic nature"],
      },
      tags: ["Fixing Agent", "Low Temp", "Storage Fastness"],
      eco: false,
    },
    {
      name: "Goldenaux® D-LVDN",
      type: { zh: "羊毛均染劑", en: "Wool Leveling Agent" },
      features: {
        zh: ["羊毛、尼龍均染", "毛尖毛根覆蓋性優", "可與陰/陽/非離子助劑共用", "COD ≤ 500，生物可分解"],
        en: ["Leveling for wool & nylon", "Excellent tippy coverage", "Compatible with all ionic types", "COD ≤ 500, biodegradable"],
      },
      tags: ["Wool", "Leveling", "Biodegradable"],
      eco: true,
      ecoLabel: "Biodegradable",
    },
  ],
};

const ecoColors: Record<string, string> = {
  "Metal-free": "#2D6A4F",
  "Ecofriendly": "#40916C",
  "Biodegradable": "#52B788",
  "OEKO-TEX 100": "#1B4332",
  "bluesign®": "#1B4332",
};

export function ProductsPage() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<Category>("acid");

  const cats = categories[lang];
  const items = products[activeTab];

  const pageT = {
    zh: { title: "產品系列", sub: "Product Lines", desc: "涵蓋酸性染料、含金複合染料、分散染料及全系列紡織助劑，為紡織業提供最完整的染色解決方案。", videoTitle: "產品與品牌影片", videoDesc: "依自有品牌與代理品牌整理影片資源，快速了解 Goldenacid®、Goldenlan®、Goldenset®、Goldenaux® 等產品定位，以及代理品牌如何補足多元染整需求。" },
    en: { title: "Product Lines", sub: "產品系列", desc: "Covering acid dyes, metal-complex dyes, disperse dyes, and a full range of textile auxiliaries for comprehensive dyeing solutions.", videoTitle: "Product & Brand Videos", videoDesc: "Browse proprietary and represented brand videos to understand how Goldenacid®, Goldenlan®, Goldenset®, Goldenaux® and partner ranges support diverse dyeing and finishing needs." },
  }[lang];

  const brandVideos = lang === "zh"
    ? [
        { title: "協京自有品牌中文版影片", group: "自有品牌", id: "wngz-YgXHuA" },
        { title: "協京代理品牌中文版影片", group: "代理品牌", id: "QSOY8vCZB7g" },
      ]
    : [
        { title: "RIITS Proprietary Brand Video", group: "Proprietary Brands", id: "VX06bv_diLw" },
        { title: "RIITS Represented Brand Video", group: "Represented Brands", id: "6A4mz89J_1M" },
      ];

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}>
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full" style={{ background: "var(--golden)", transform: "translate(30%, 30%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-green-300 text-sm mb-3 tracking-widest uppercase">{pageT.sub}</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {pageT.title}
            </h1>
            <p className="text-green-100/80 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              {pageT.desc}
            </p>
          </motion.div>
        </div>
      </section>


      {/* Brand videos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="mb-10 text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-[0.18em] uppercase"
              style={{ background: "var(--secondary)", color: "var(--forest-dark)", fontWeight: 600 }}>
              <PlayCircle size={14} /> Video
            </div>
            <h2 className="mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}>
              {pageT.videoTitle}
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {pageT.videoDesc}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {brandVideos.map((video, i) => (
              <motion.article
                key={video.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)", background: "var(--natural-white)" }}
              >
                <div className="aspect-video bg-green-950">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)" }}>
                    {video.title}
                  </h3>
                  <span className="shrink-0 rounded-full px-3 py-1 text-xs" style={{ background: "var(--golden)", color: "var(--forest-dark)", fontWeight: 700 }}>
                    {video.group}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cats.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 ${
                  activeTab === cat.id
                    ? "text-white shadow-lg scale-105"
                    : "bg-white border hover:border-green-400 hover:text-green-800"
                }`}
                style={
                  activeTab === cat.id
                    ? { background: "var(--forest-dark)", fontWeight: 600 }
                    : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {items.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs mb-1" style={{ color: "var(--muted-foreground)" }}>
                        {product.type[lang]}
                      </p>
                      <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.15rem" }}>
                        {product.name}
                      </h3>
                    </div>
                    {product.eco && (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-white shrink-0"
                        style={{ background: ecoColors[product.ecoLabel!] || "var(--forest-light)" }}>
                        <Leaf size={10} />
                        {product.ecoLabel}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 flex-1 mb-4">
                    {product.features[lang].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "var(--forest-light)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "var(--secondary)", color: "var(--forest-dark)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Eco note */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-6 flex items-start gap-4"
            style={{ background: "linear-gradient(135deg, var(--secondary), #D8EDD9)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "var(--forest-light)" }}>
              <Leaf size={18} className="text-white" />
            </div>
            <div>
              <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)" }} className="mb-1">
                {lang === "zh" ? "環保產品標示說明" : "Eco Product Label Guide"}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {lang === "zh"
                  ? "標有環保標籤的產品符合 ZDHC、OEKO-TEX 100、bluesign® 等國際規範，或具備無金屬、生物可分解等環境友善特性，協助您的產品通過各項永續稽核。"
                  : "Products with eco labels comply with ZDHC, OEKO-TEX 100, bluesign® and other international standards, or possess metal-free and biodegradable properties — helping your products pass sustainability audits."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
