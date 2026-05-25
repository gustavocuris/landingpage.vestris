import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";

export function RecoverPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl items-center">
        <section className="w-full rounded-lg border border-white/10 bg-black/45 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:p-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-300">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao login
          </Link>

          <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-400 text-[#041006]">
            {sent ? <CheckCircle2 className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
          </div>

          <h1 className="section-title mt-6 text-3xl font-black uppercase text-white">
            RECUPERAR SENHA
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Digite seu e-mail para receber um link ou codigo de recuperacao.
          </p>

          {sent ? (
            <div className="mt-6 rounded-lg border border-lime-400/25 bg-lime-400/10 p-4 text-sm leading-relaxed text-lime-100">
              Enviamos as instrucoes de recuperacao para o e-mail informado. Este fluxo esta simulado e preparado para integracao futura.
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
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
              <button className="w-full rounded-lg bg-lime-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#041006] transition hover:bg-lime-300">
                Enviar recuperacao
              </button>
            </form>
          )}

          <Link to="/redefinir-senha" className="mt-6 inline-flex text-sm font-semibold text-slate-300 hover:text-white">
            Ja tenho um codigo ou link
          </Link>
        </section>
      </div>
    </main>
  );
}
