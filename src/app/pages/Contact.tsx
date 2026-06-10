import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "../LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export function ContactPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({ name: "", company: "", email: "", subject: "", message: "" });

  const t = {
    zh: {
      heroTitle: "聯絡我們",
      heroSub: "Contact Us",
      heroDesc: "無論您有產品諮詢、技術問題或合作意向，我們的專業團隊隨時為您提供協助。",
      infoTitle: "聯絡資訊",
      formTitle: "傳送訊息",
      name: "姓名",
      company: "公司名稱",
      email: "電子郵件",
      subject: "主旨",
      message: "訊息內容",
      namePh: "您的姓名",
      companyPh: "貴公司名稱",
      emailPh: "your@email.com",
      subjectPh: "產品詢問 / 技術支援 / 其他",
      messagePh: "請描述您的需求或問題…",
      send: "送出訊息",
      sending: "送出中…",
      sendError: "訊息送出失敗，請稍後再試或直接 Email 聯絡我們。",
      sentTitle: "訊息已送出！",
      sentDesc: "感謝您的來信，我們將於 1-2 個工作天內回覆您。",
      sendAnother: "再傳一封",
      addressLabel: "地址",
      address: "台灣",
      tel: "電話",
      fax: "傳真",
      hours: "服務時間",
      hoursVal: "週一 - 週五，09:00 - 18:00 (GMT+8)",
    },
    en: {
      heroTitle: "Contact Us",
      heroSub: "Get in Touch",
      heroDesc: "Whether you have product inquiries, technical questions, or partnership proposals, our professional team is here to help.",
      infoTitle: "Contact Information",
      formTitle: "Send a Message",
      name: "Name",
      company: "Company",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePh: "Your name",
      companyPh: "Your company name",
      emailPh: "your@email.com",
      subjectPh: "Product Inquiry / Technical Support / Other",
      messagePh: "Please describe your needs or questions…",
      send: "Send Message",
      sending: "Sending…",
      sendError: "Message failed to send. Please try again later or contact us by email directly.",
      sentTitle: "Message Sent!",
      sentDesc: "Thank you for reaching out. We will reply within 1-2 business days.",
      sendAnother: "Send Another",
      addressLabel: "Address",
      address: "Taiwan",
      tel: "Phone",
      fax: "Fax",
      hours: "Business Hours",
      hoursVal: "Mon - Fri, 09:00 - 18:00 (GMT+8)",
    },
  }[lang];

  const googleSheetEndpoint = "https://script.google.com/macros/s/AKfycbz7yb8xu5EI3WKyM24Jg-tsikJk6xWE-e3-qMAByj1cuyk3eeRIVaDTBxkL47OpYZz9yw/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const payload = new URLSearchParams({
      ...form,
      language: lang,
      source: "RIITS website contact form",
      submittedAt: new Date().toISOString(),
    });

    try {
      await fetch(googleSheetEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(t.sendError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16" style={{ background: "var(--natural-white)" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest-dark), var(--forest-mid))" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full" style={{ background: "var(--golden)", transform: "translate(-30%, -30%)" }} />
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

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="lg:col-span-2"
            >
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.4rem" }} className="mb-6">
                {t.infoTitle}
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone, label: t.tel, value: "+886-2-2361-2328", sub: "+886-2-2331-5877", href: "tel:+886223612328" },
                  { icon: Mail, label: "Email", value: "riits@ms10.hinet.net", href: "mailto:riits@ms10.hinet.net" },
                  { icon: Globe, label: "Website", value: "www.riits.com.tw", href: "https://www.riits.com.tw", target: "_blank" },
                  { icon: MapPin, label: t.addressLabel, value: t.address },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--secondary)" }}>
                      <item.icon size={16} style={{ color: "var(--forest-light)" }} />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={(item as any).target} rel="noopener noreferrer"
                          className="text-sm hover:underline transition-colors"
                          style={{ color: "var(--forest-dark)", fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--forest-dark)", fontWeight: 500 }}>{item.value}</p>
                      )}
                      {(item as any).sub && (
                        <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{(item as any).sub}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3 mt-2 p-4 rounded-xl"
                  style={{ background: "var(--secondary)" }}>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "var(--muted-foreground)" }}>{t.hours}</p>
                    <p className="text-sm" style={{ color: "var(--forest-dark)", fontWeight: 500 }}>{t.hoursVal}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="lg:col-span-3"
            >
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.4rem" }} className="mb-6">
                {t.formTitle}
              </h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl"
                  style={{ background: "var(--secondary)" }}>
                  <CheckCircle2 size={48} className="mb-4" style={{ color: "var(--forest-light)" }} />
                  <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "var(--forest-dark)", fontSize: "1.2rem" }} className="mb-2">
                    {t.sentTitle}
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>{t.sentDesc}</p>
                  <button
                    onClick={() => { setSubmitted(false); setSubmitError(""); setForm({ name: "", company: "", email: "", subject: "", message: "" }); }}
                    className="px-5 py-2 rounded-full text-sm text-white transition-all hover:opacity-90"
                    style={{ background: "var(--forest-dark)" }}
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: t.name, ph: t.namePh, type: "text" },
                      { key: "company", label: t.company, ph: t.companyPh, type: "text" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-sm mb-1.5" style={{ color: "var(--forest-dark)", fontWeight: 500 }}>
                          {f.label} *
                        </label>
                        <input
                          required
                          type={f.type}
                          placeholder={f.ph}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                          style={{ borderColor: "var(--border)", background: "var(--input-background)", color: "var(--foreground)" }}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { key: "email", label: t.email, ph: t.emailPh, type: "email" },
                    { key: "subject", label: t.subject, ph: t.subjectPh, type: "text" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-sm mb-1.5" style={{ color: "var(--forest-dark)", fontWeight: 500 }}>
                        {f.label} *
                      </label>
                      <input
                        required
                        type={f.type}
                        placeholder={f.ph}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
                        style={{ borderColor: "var(--border)", background: "var(--input-background)", color: "var(--foreground)" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm mb-1.5" style={{ color: "var(--forest-dark)", fontWeight: 500 }}>
                      {t.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={t.messagePh}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none"
                      style={{ borderColor: "var(--border)", background: "var(--input-background)", color: "var(--foreground)" }}
                    />
                  </div>
                  {submitError && (
                    <p className="rounded-xl px-4 py-3 text-sm" style={{ background: "#FEE2E2", color: "#991B1B" }}>
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white transition-all hover:opacity-90 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    style={{ background: "var(--forest-dark)", fontWeight: 600 }}
                  >
                    <Send size={15} />
                    {submitting ? t.sending : t.send}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
