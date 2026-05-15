import { CheckCircle2 } from "lucide-react";
import { clinicalFeatureGroups } from "@/data/index";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-24 bg-[#050a07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <SectionLabel>Funcionalidades</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl">
            Tudo que o atendimento em silvestres exige.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
            Cada bloco resolve uma camada real da prática clínica. Não são
            funcionalidades genéricas — foram desenhadas para a medicina de
            silvestres e exóticos.
          </p>
        </div>

        {/* Feature groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clinicalFeatureGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl border border-white/8 bg-white/2 flex flex-col gap-4"
            >
              {/* Category header */}
              <div>
                <h3 className="font-bold text-white text-sm mb-1">
                  {group.category}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/6" />

              {/* Feature list */}
              <ul className="space-y-2.5">
                {group.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
