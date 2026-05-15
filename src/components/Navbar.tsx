import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { products } from "@/data/products";
import { useTheme } from "@/contexts/ThemeContext";

// Nav items derived from products + fixed links
const productLinks = products.map((p) => ({
  label: p.shortName,
  path: p.path,
  status: p.status,
}));

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/" || pathname === "/global";
  const isActive = (path: string) => pathname === path;
  const { theme, toggle } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/6 backdrop-blur-xl"
      style={{ background: "var(--bg-nav)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 h-16 flex items-center gap-3 justify-between">

        {/* ─── Brand → Global Vestris home ────────────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 rounded bg-lime-400 flex items-center justify-center flex-shrink-0">
            <span className="text-black text-[10px] font-black">V</span>
          </div>
          <span className="font-black text-white text-sm tracking-tight">VESTRIS</span>
          {isHome && (
            <span className="hidden sm:inline-block ml-0.5 px-1.5 py-0.5 rounded bg-white/6 text-slate-500 text-[9px] font-semibold uppercase tracking-wider">
              Global
            </span>
          )}
        </Link>

        {/* ─── Desktop nav ─────────────────────────────────────────────────── */}
        <nav className="hidden xl:flex items-center gap-0.5 flex-1 px-4">
          {/* Global Vestris = home */}
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              isHome ? "text-white bg-white/8" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Global Vestris
          </Link>

          <div className="w-px h-4 bg-white/10 mx-1.5" />

          {/* Product links */}
          {productLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                isActive(link.path)
                  ? "text-white bg-white/8"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              } ${link.status === "planned" ? "opacity-55" : ""}`}
            >
              {link.label}
              {link.status === "dev" && (
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
              )}
            </Link>
          ))}
          <div className="w-px h-4 bg-white/10 mx-1.5" />
          <a
            href="#contato"
            className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-colors whitespace-nowrap"
          >
            Contato
          </a>
        </nav>

        {/* ─── Right actions ───────────────────────────────────────────────── */}
        <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
          <Link
            to="/clinico#planos"
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-white/80 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/6 transition-all tracking-wide uppercase"
          >
            Planos
          </Link>
          <div className="w-px h-4 bg-white/10" />
          <button className="px-4 py-1.5 rounded-lg text-xs font-bold border border-lime-500/35 bg-lime-500/8 text-lime-300 hover:bg-lime-500/18 hover:border-lime-500/60 transition-all tracking-wide">
            Login
          </button>
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/6 transition-all"
          >
            {theme === "dark"
              ? <Sun className="w-3.5 h-3.5" />
              : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* ─── Mobile hamburger ───────────────────────────────────────────── */}
        <div className="xl:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/6 transition-all"
          >
            {theme === "dark"
              ? <Sun className="w-4 h-4" />
              : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile menu ─────────────────────────────────────────────────────── */}
      {open && (
        <div className="xl:hidden border-t border-white/8" style={{ background: "var(--bg-mobile)" }}>
          <nav className="p-4 space-y-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isHome ? "text-white bg-white/8" : "text-slate-400 hover:text-white"
              }`}
            >
              Global Vestris
              <span className="text-[10px] text-slate-600 uppercase font-semibold">Hub</span>
            </Link>

            <div className="pt-2 pb-1 px-3">
              <span className="text-[10px] text-slate-600 uppercase font-semibold tracking-wider">Sistemas</span>
            </div>

            {productLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(link.path) ? "text-white bg-white/8" : "text-slate-400 hover:text-white"
                } ${link.status === "planned" ? "opacity-55" : ""}`}
              >
                {link.label}
                {link.status === "dev" && (
                  <span className="text-[10px] text-blue-400 font-semibold">EM DEV</span>
                )}
                {link.status === "planned" && (
                  <span className="text-[10px] text-slate-600 font-semibold">EM BREVE</span>
                )}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-white/8 flex gap-2">
              <Link
                to="/clinico#planos"
                onClick={() => setOpen(false)}
                className="flex-1 py-2.5 rounded-lg border border-white/14 text-sm text-white font-semibold text-center uppercase tracking-wide"
              >
                Planos
              </Link>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="flex-1 py-2.5 rounded-lg border border-white/8 text-sm text-slate-400 text-center"
              >
                Contato
              </a>
              <button className="flex-1 py-2.5 rounded-lg border border-lime-500/40 bg-lime-500/10 text-lime-300 text-sm font-bold text-center">
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
