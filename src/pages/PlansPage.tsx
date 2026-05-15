import { PageLayout } from "@/components/PageLayout";
import { PlansSection } from "@/components/clinico/PlansSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PlansPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel>Planos · Vestris Clínico</SectionLabel>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Preços simples.
            <br />
            Sem surpresa.
          </h1>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">
            Escolha o plano para o seu perfil de prática. Todos com acesso
            completo ao Vestris Clínico.
          </p>
        </div>
      </section>

      {/* Plans component (reused from ClinicPage) */}
      <PlansSection />

      {/* FAQ minimal */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">
            Perguntas frequentes
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "O que está incluído no período de acesso antecipado?",
                a: "Durante o beta, todos os planos têm acesso completo às funcionalidades disponíveis. O preço final pode ser ajustado no lançamento oficial.",
              },
              {
                q: "Posso trocar de plano?",
                a: "Sim. Você pode fazer upgrade ou downgrade a qualquer momento. O ajuste é proporcional ao ciclo de cobrança.",
              },
              {
                q: "O que é o plano Operação?",
                a: "Para hospitais e clínicas de grande porte. Inclui equipes ilimitadas, gestão de internação e acesso antecipado à integração com o Vestris Lab.",
              },
              {
                q: "Os outros módulos (Lab, Student) têm custo separado?",
                a: "Sim. Cada módulo do ecossistema terá seu próprio plano. Clientes do Clínico terão condições especiais para expansão.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="p-5 rounded-2xl border border-white/8 bg-white/2"
              >
                <p className="font-semibold text-white text-sm mb-2">
                  {item.q}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
