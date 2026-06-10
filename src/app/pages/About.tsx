import { motion } from "motion/react";
import { Leaf, Target, Heart, Globe2, PlayCircle } from "lucide-react";
import { useLang } from "../LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function AboutPage() {
  const { lang } = useLang();
  const t = {
    zh: {
      heroTitle: "關於我們",
      heroSub: "About RIITS",
      intro: "RIITS TRADING CO., LTD. 是一家專業從事紡織染料與助劑的貿易公司，深耕業界多年，以提供高品質、環境友善的染色解決方案為使命。",
      story: "我們的故事",
      storyP1: "RIITS TRADING CO., LTD. 自創立以來，始終致力於紡織染色產業的永續發展。我們代理並銷售涵蓋酸性染料、金屬複合染料、分散染料及紡織助劑等多元化產品，服務對象遍及尼龍、羊毛、蠶絲、聚酯纖維等各類紡織廠。",
      storyP2: "公司擁有完整的 ISO 9001:2015 品質管理體系，確保從產品選型、技術支援到售後服務的全方位品質保障。同時，我們持有 ISO 14001:2015 環境管理系統認證，並積極推廣 bluesign® 認證產品，展現對環境永續的堅定承諾。",
      storyP3: "面向未來，RIITS 持續擴大環保產品組合，協助客戶符合 ZDHC、OEKO-TEX 等國際規範，共同打造更美好、更潔淨的紡織產業生態鏈。",
      storyP4: "透過自有品牌與代理品牌雙軌布局，協京／RIITS 將全球染整化學品資源、在地技術服務與永續合規要求整合為一站式供應能力，協助客戶從打樣、量產到認證稽核皆能穩定推進。",
      videoTitle: "品牌與公司介紹影片",
      videoDesc: "從自有品牌到代理品牌，了解 RIITS 如何以專業染料、紡織助劑與技術服務，串聯品質、效率與環境責任。",
      videos: [
        { title: "協京自有品牌介紹", label: "中文版", id: "wngz-YgXHuA" },
        { title: "協京代理品牌介紹", label: "中文版", id: "QSOY8vCZB7g" },
      ],
      missionTitle: "使命與願景",
      mission: "使命",
      missionDesc: "提供業界最優質、最環保的染色解決方案，協助紡織廠商在品質、成本與環保之間取得最佳平衡。",
      vision: "願景",
      visionDesc: "成為亞太地區最受信賴的環保紡織染料供應商，引領行業朝向更永續的未來邁進。",
      values: "核心價值",
      valuesItems: [
        { title: "誠信", desc: "以誠信為根本，建立長久的夥伴關係" },
        { title: "專業", desc: "深厚的技術知識，提供精準的染色建議" },
        { title: "永續", desc: "將環保理念融入每個業務決策" },
        { title: "創新", desc: "持續引進新技術與產品，滿足市場需求" },
      ],
      teamTitle: "聯絡資訊",
    },
    en: {
      heroTitle: "About Us",
      heroSub: "About RIITS",
      intro: "RIITS TRADING CO., LTD. is a professional trading company specializing in textile dyes and auxiliaries, dedicated to providing high-quality, eco-friendly dyeing solutions.",
      story: "Our Story",
      storyP1: "Since its establishment, RIITS TRADING CO., LTD. has been committed to sustainable development in the textile dyeing industry. We represent and sell a diverse range of products including acid dyes, metal-complex dyes, disperse dyes, and textile auxiliaries, serving textile mills working with nylon, wool, silk, polyester, and other fibers.",
      storyP2: "The company maintains a comprehensive ISO 9001:2015 quality management system, ensuring quality throughout product selection, technical support, and after-sales service. We also hold ISO 14001:2015 environmental management certification and actively promote bluesign® certified products, demonstrating our firm commitment to environmental sustainability.",
      storyP3: "Looking forward, RIITS continues to expand its eco-friendly product portfolio, helping customers comply with ZDHC, OEKO-TEX, and other international standards, together building a cleaner and more sustainable textile industry ecosystem.",
      storyP4: "Through both proprietary and represented brand portfolios, RIITS integrates global dyeing-chemical resources, local technical service, and sustainability compliance into a one-stop supply capability for sampling, production, and certification audits.",
      videoTitle: "Brand & Company Videos",
      videoDesc: "Explore how RIITS connects quality, efficiency, and environmental responsibility through professional dyes, textile auxiliaries, and technical service.",
      videos: [
        { title: "RIITS Proprietary Brands", label: "English", id: "VX06bv_diLw" },
        { title: "RIITS Represented Brands", label: "English", id: "6A4mz89J_1M" },
      ],
      missionTitle: "Mission & Vision",
      mission: "Mission",
      missionDesc: "To provide the highest quality and most eco-friendly dyeing solutions in the industry, helping textile manufacturers achieve the best balance between quality, cost, and environmental impact.",
      vision: "Vision",
      visionDesc: "To become the most trusted eco-friendly textile dye supplier in the Asia-Pacific region, leading the industry toward a more sustainable future.",
      values: "Core Values",
      valuesItems: [
        { title: "Integrity", desc: "Building long-lasting partnerships on a foundation of trust" },
        { title: "Expertise", desc: "Deep technical knowledge enabling precise dyeing recommendations" },
        { title: "Sustainability", desc: "Integrating eco-consciousness into every business decision" },
        { title: "Innovation", desc: "Continuously introducing new technologies and products" },
      ],
      teamTitle: "Contact Information",
    },
  }[lang];

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "var(--golden)", transform: "translate(30%, -30%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-green-300 text-sm mb-3 tracking-widest uppercase">{t.heroSub}</p>
            <h1 className="text-white mb-6" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {t.heroTitle}
            </h1>
            <p className="text-green-100/80 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
              {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }} className="mb-6">
                {t.story}
              </h2>
              <div className="flex flex-col gap-4">
                {[t.storyP1, t.storyP2, t.storyP3, t.storyP4].map((p, i) => (
                  <p key={i} className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <div className="rounded-3xl overflow-hidden p-8 h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-light))", minHeight: "360px" }}>
                <div className="text-center text-white">
                  <Leaf size={48} className="mx-auto mb-6 text-green-300" />
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { v: "ISO 9001", l: lang === "zh" ? "品質管理" : "Quality Mgmt" },
                      { v: "ISO 14001", l: lang === "zh" ? "環境管理" : "Env. Mgmt" },
                      { v: "bluesign®", l: lang === "zh" ? "環保認證" : "Eco Cert." },
                      { v: "ZDHC", l: lang === "zh" ? "化學品管理" : "Chem. Mgmt" },
                    ].map((item) => (
                      <div key={item.v} className="p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.1)" }}>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{item.v}</p>
                        <p className="text-green-200 text-xs mt-1">{item.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Company videos */}
      <section className="py-20" style={{ background: "var(--natural-white)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-[0.18em] uppercase"
                style={{ background: "var(--secondary)", color: "var(--forest-dark)", fontWeight: 600 }}>
                <PlayCircle size={14} /> Video Library
              </div>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}>
                {t.videoTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              {t.videoDesc}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.videos.map((video, i) => (
              <motion.article
                key={video.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "var(--border)" }}
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
                    {video.label}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20" style={{ background: "var(--natural-white)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.missionTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: t.mission, desc: t.missionDesc, color: "var(--forest-dark)" },
              { icon: Globe2, title: t.vision, desc: t.visionDesc, color: "var(--forest-light)" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="p-8 rounded-2xl bg-white border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}18` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.2rem" }} className="mb-3">
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.8rem" }}
          >
            {t.values}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.valuesItems.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={fadeUp}
                className="text-center p-6 rounded-2xl border hover:shadow-md transition-all duration-300"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--secondary)" }}>
                  <Heart size={20} style={{ color: "var(--forest-light)" }} />
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "var(--forest-dark)" }} className="mb-2">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
