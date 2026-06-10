import { motion } from "motion/react";
import { Award, Shield, Leaf, CheckCircle2, ExternalLink } from "lucide-react";
import { useLang } from "../LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function CertificationsPage() {
  const { lang } = useLang();
  const t = {
    zh: {
      heroTitle: "認證",
      heroSub: "Certifications & Compliance",
      heroDesc: "RIITS 持有多項國際認證，確保產品品質、環境管理及化學品安全符合全球最高標準。",
      mainTitle: "核心認證",
      certs: [
        {
          name: "ISO 9001:2015",
          certNo: "14266",
          category: "品質管理",
          icon: Shield,
          color: "var(--forest-dark)",
          desc: "品質管理系統國際標準，確保從產品採購、技術支援到售後服務的完整品質控管體系。涵蓋客戶需求評估、供應商管理、產品一致性及持續改善機制。",
          benefits: ["確保產品一致性與可靠性", "系統化品質管理流程", "客戶滿意度持續提升", "供應商嚴格審核"],
        },
        {
          name: "ISO 14001:2015",
          certNo: "E2727",
          category: "環境管理",
          icon: Leaf,
          color: "var(--forest-light)",
          desc: "環境管理系統國際標準，展現 RIITS 對環境永續發展的系統性承諾。透過識別、評估和控制業務活動的環境影響，持續改善環境績效。",
          benefits: ["系統化環境影響管理", "減少廢棄物與能源消耗", "符合環保法規要求", "提升企業永續競爭力"],
        },
        {
          name: "bluesign®",
          certNo: "—",
          category: "永續生產認證",
          icon: Leaf,
          color: "#40916C",
          desc: "紡織業最嚴格的永續生產認證之一。bluesign® 認證產品確保在生產過程中對環境、工人安全及消費者健康的影響降至最低，涵蓋化學品管理、資源效率及消費者安全。",
          benefits: ["化學品安全管理", "資源效率最佳化", "工作場所安全保障", "消費者健康保護"],
        },
        {
          name: "ZDHC MRSL",
          certNo: "A431MZ88",
          category: "零有害排放",
          icon: Award,
          color: "var(--golden)",
          desc: "零有害排放化學品計劃（ZDHC）製造業限用物質清單，確保製程中不使用有害化學物質。RIITS 的 ZDHC ID A431MZ88 代表我們對安全化學品使用的正式承諾。",
          benefits: ["消除有害化學品使用", "保護工廠員工健康", "降低環境污染風險", "符合國際品牌採購要求"],
        },
      ],
      addTitle: "其他符合規範",
      addItems: [
        { name: "OEKO-TEX® Standard 100", desc: "紡織品有害物質測試認證（Goldenaux® ASF BS 符合）" },
        { name: "REACH", desc: "歐盟化學品登記、評估及授權法規符合" },
        { name: "RSL/MRSL", desc: "限用物質清單，協助客戶符合各大品牌採購要求" },
        { name: "GRS", desc: "全球回收標準，支援循環再生纖維染色需求" },
      ],
    },
    en: {
      heroTitle: "Certifications",
      heroSub: "Certifications & Compliance",
      heroDesc: "RIITS holds multiple international certifications, ensuring our products meet the highest global standards for quality, environmental management, and chemical safety.",
      mainTitle: "Core Certifications",
      certs: [
        {
          name: "ISO 9001:2015",
          certNo: "14266",
          category: "Quality Management",
          icon: Shield,
          color: "var(--forest-dark)",
          desc: "International standard for quality management systems. Ensures comprehensive quality control from product sourcing and technical support to after-sales service, covering customer requirements, supplier management, product consistency, and continuous improvement.",
          benefits: ["Consistent, reliable products", "Systematic quality management", "Continuous customer satisfaction", "Rigorous supplier auditing"],
        },
        {
          name: "ISO 14001:2015",
          certNo: "E2727",
          category: "Environmental Management",
          icon: Leaf,
          color: "var(--forest-light)",
          desc: "International standard for environmental management systems, demonstrating RIITS' systematic commitment to environmental sustainability. By identifying, evaluating, and controlling the environmental impacts of business activities, we continuously improve our environmental performance.",
          benefits: ["Systematic environmental impact management", "Reduced waste & energy consumption", "Regulatory compliance", "Improved sustainability competitiveness"],
        },
        {
          name: "bluesign®",
          certNo: "—",
          category: "Sustainable Production",
          icon: Leaf,
          color: "#40916C",
          desc: "One of the most rigorous sustainable production certifications in the textile industry. bluesign® certified products minimize environmental, worker safety, and consumer health impacts in production, covering chemical management, resource efficiency, and consumer safety.",
          benefits: ["Chemical safety management", "Optimized resource efficiency", "Workplace safety assurance", "Consumer health protection"],
        },
        {
          name: "ZDHC MRSL",
          certNo: "A431MZ88",
          category: "Zero Discharge",
          icon: Award,
          color: "var(--golden)",
          desc: "The ZDHC Manufacturing Restricted Substances List ensures no hazardous chemicals are used in the process. RIITS' ZDHC ID A431MZ88 represents our formal commitment to safe chemical use.",
          benefits: ["Elimination of hazardous chemicals", "Worker health protection", "Reduced pollution risk", "Compliance with global brand requirements"],
        },
      ],
      addTitle: "Additional Compliance",
      addItems: [
        { name: "OEKO-TEX® Standard 100", desc: "Textile harmful substances test certification (Goldenaux® ASF BS compliant)" },
        { name: "REACH", desc: "EU chemical registration, evaluation and authorization compliance" },
        { name: "RSL/MRSL", desc: "Restricted Substances List — helping clients meet major brand sourcing requirements" },
        { name: "GRS", desc: "Global Recycled Standard — supporting dyeing of recycled fiber products" },
      ],
    },
  }[lang];

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full" style={{ background: "var(--golden)", transform: "translate(30%, -30%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-green-300 text-sm mb-3 tracking-widest uppercase">{t.heroSub}</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {t.heroTitle}
            </h1>
            <p className="text-green-100/80 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              {t.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Certs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.mainTitle}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-7 rounded-2xl border hover:shadow-xl transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${cert.color}18` }}>
                    <cert.icon size={26} style={{ color: cert.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.15rem" }}>
                        {cert.name}
                      </h3>
                      {cert.certNo !== "—" && (
                        <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "var(--secondary)", color: "var(--forest-dark)" }}>
                          #{cert.certNo}
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{cert.category}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>
                  {cert.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs" style={{ color: "var(--forest-dark)" }}>
                      <CheckCircle2 size={12} style={{ color: cert.color, shrink: 0 }} />
                      {b}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Compliance */}
      <section className="py-20" style={{ background: "var(--natural-white)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-10" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.addTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.addItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="flex items-start gap-3 p-5 bg-white rounded-2xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <ExternalLink size={16} className="mt-0.5 shrink-0" style={{ color: "var(--forest-light)" }} />
                <div>
                  <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)", fontSize: "0.9rem" }} className="mb-0.5">
                    {item.name}
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
