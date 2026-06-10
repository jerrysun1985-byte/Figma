import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useLang } from "./LangContext";

export function Root() {
  const { lang, toggleLang } = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} onLangToggle={toggleLang} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
