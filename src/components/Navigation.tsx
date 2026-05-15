import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/index";
import logoImg from "@/assets/logo-ofc-vestris.png";

export function Navigation() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || (path === "/clinico" && pathname === "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[#050a07]/90 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          to="/clinico"
          className="flex items-center gap-2.5 flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <img
            src={logoImg}
            alt="Vestris"
            className="h-6 w-auto object-contain"
          />
          <span className="font-black text-white tracking-tight text-base">
            VESTRIS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap
                  ${active
                    ? "text-white bg-white/8"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                  ${link.status === "planned" ? "opacity-60" : ""}
                `}
              >
                {link.label}
                {link.status === "dev" && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
          <button className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-colors">
            Entrar
          </button>
          <Link
            to="/planos"
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors shadow-sm shadow-emerald-500/30"
          >
            Acesso antecipado
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/8 bg-[#050a07]">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${active ? "text-white bg-white/8" : "text-slate-400 hover:text-white"}
                    ${link.status === "planned" ? "opacity-60" : ""}
                  `}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    {link.status === "dev" && (
                      <span className="text-[10px] text-blue-400 font-semibold">EM DEV</span>
                    )}
                    {link.status === "planned" && (
                      <span className="text-[10px] text-slate-500 font-semibold">EM BREVE</span>
                    )}
                  </span>
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/8 flex gap-2">
              <button className="flex-1 py-2 rounded-lg border border-white/12 text-sm text-slate-400 hover:text-white transition-colors">
                Entrar
              </button>
              <Link
                to="/planos"
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold text-center transition-colors"
              >
                Acesso antecipado
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
