import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";

export function ResetPasswordPage() {
  const [saved, setSaved] = useState(false);

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl items-center">
        <section className="w-full rounded-lg border border-white/10 bg-black/45 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:p-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-300">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao login
          </Link>

          <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400 text-[#041006]">
            {saved ? <CheckCircle2 className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
          </div>

          <h1 className="section-title mt-6 text-3xl font-black uppercase text-white">
            REDEFINIR SENHA
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Crie uma nova senha para acessar sua conta Vestris.
          </p>

          {saved && (
            <div className="mt-6 rounded-lg border border-lime-400/25 bg-lime-400/10 p-4 text-sm leading-relaxed text-lime-100">
              Nova senha salva com sucesso. Fluxo simulado para futura integracao.
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); setSaved(true); }}>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Nova senha</span>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 focus-within:border-lime-400/60">
                <Lock className="h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                  placeholder="Nova senha"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Confirmar senha</span>
              <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 focus-within:border-lime-400/60">
                <Lock className="h-4 w-4 text-slate-500" />
                <input
                  type="password"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                  placeholder="Confirmar senha"
                />
              </div>
            </label>

            <button className="w-full rounded-lg bg-lime-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#041006] transition hover:bg-lime-300">
              Salvar nova senha
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
