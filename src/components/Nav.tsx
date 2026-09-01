import { useEffect, useState } from "react";
import { useLanguage, type Lang } from "../i18n";

const langs: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#path", label: t.nav.path },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-accent tracking-wider">
          M.EL_MBIMBEY
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 font-mono text-xs border border-white/10 rounded-full p-1">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === l.code ? "bg-accent text-ink font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
