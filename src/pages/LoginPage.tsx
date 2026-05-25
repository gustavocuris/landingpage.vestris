import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, Lock, Mail } from "lucide-react";

export function LoginPage() {
  const [showError, setShowError] = useState(false);

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-lg border border-white/10 bg-black/45 shadow-[0_28px_90px_rgba(0,0,0,0.45)] lg:grid-cols-[0.95fr_1.05fr]">
          <section className="hidden border-r border-white/8 bg-lime-400/8 p-10 lg:block">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-300">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <div className="mt-20">
              <span className="text-mono-tech text-lime-300">Vestris acesso</span>
              <h1 className="section-title mt-5 text-5xl font-black uppercase leading-tight text-white">
                AREA SEGURA VESTRIS
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">
                Entre para acessar sistemas, rotinas clinicas, laboratorio, estudos e operacoes de fauna.
              </p>
            </div>
          </section>

          <section className="p-6 sm:p-8 lg:p-10">
            <div className="lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-300">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </div>

            <div className="mx-auto max-w-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400 text-[#041006]">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="section-title mt-6 text-3xl font-black uppercase text-white">
                ENTRAR
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Use seu e-mail e senha para acessar a plataforma.
              </p>

              {showError && (
                <div className="mt-6 flex gap-3 rounded-lg border border-rose-400/25 bg-rose-400/10 p-4 text-sm text-rose-100">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Nao foi possivel entrar. Confira seus dados ou recupere sua senha.
                </div>
              )}

              <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); setShowError(true); }}>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail</span>
                  <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 focus-within:border-lime-400/60">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                      placeholder="voce@email.com"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Senha</span>
                  <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 focus-within:border-lime-400/60">
                    <Lock className="h-4 w-4 text-slate-500" />
                    <input
                      type="password"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                      placeholder="Sua senha"
                    />
                  </div>
                </label>

                <button className="w-full rounded-lg bg-lime-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#041006] transition hover:bg-lime-300">
                  Entrar
                </button>
              </form>

              <div className="mt-6 grid gap-3 text-sm">
                <Link to="/recuperar-senha" className="font-semibold text-lime-300 hover:text-lime-200">
                  Esqueci minha senha
                </Link>
                <Link to="/recuperar-senha" className="text-slate-400 hover:text-white">
                  Recuperar senha pelo Gmail
                </Link>
                <Link to="/redefinir-senha" className="text-slate-400 hover:text-white">
                  Alterar senha
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
