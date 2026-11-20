import { motion } from 'motion/react';
import {
  FileText,
  Network,
  ClipboardCheck,
  Moon,
  Check,
  type LucideIcon,
} from 'lucide-react';

interface MaterialItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

const FEATURED_MATERIAL: MaterialItem = {
  number: '01',
  title: 'Plano de Prática em PDF',
  description:
    'Um plano organizado para 30 dias dividido em 4 semanas, com uma estrutura diária que ajuda você a saber quais exercícios realizar, como distribuir sua prática e quanto tempo reservar para cada sessão. Consulte a programação de cada dia e acompanhe a sequência proposta ao longo das semanas, sem precisar decidir tudo por conta própria.',
  highlights: [
    'Plano de 30 dias dividido em 4 semanas',
    'Exercícios organizados por dia',
  ],
  icon: FileText,
};

const SECONDARY_MATERIALS: MaterialItem[] = [
  {
    number: '02',
    title: '4 Mapas Mentais Semanais',
    description:
      'Mapas visuais separados por semana para facilitar a consulta dos exercícios e da organização da prática. Tenha uma visão clara do conteúdo de cada etapa, com informações distribuídas de maneira visual e fácil de acompanhar.',
    highlights: [
      'Um mapa mental para cada semana',
      'Consulta visual',
    ],
    icon: Network,
  },
  {
    number: '03',
    title: 'Checklist de Acompanhamento',
    description:
      'Uma ferramenta prática para registrar sua rotina, marcar os dias em que realizou os exercícios e acompanhar sua própria consistência ao longo do plano de 30 dias dividido em 4 semanas.',
    highlights: [
      'Registro da prática',
      'Marcação diária',
    ],
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Checklist da Rotina Antes de Dormir',
    description:
      'Uma lista visual para ajudar você a organizar sua rotina antes de dormir, reunindo pontos de atenção e hábitos que podem ser observados no dia a dia.',
    highlights: [
      'Organização da rotina noturna',
      'Consulta simples',
    ],
    icon: Moon,
  },
];

export function IncludedMaterials() {
  const FeaturedIcon = FEATURED_MATERIAL.icon;

  return (
    <section
      aria-labelledby="included-materials-heading"
      className="bg-[#F6F9FD] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho centralizado com marca-texto azul mais intenso (#4B8FE8) */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <h2
            id="included-materials-heading"
            className="font-display text-2xl leading-tight font-extrabold tracking-tight text-[#080F1E] sm:text-4xl"
          >
            <span className="relative inline-block px-2.5">
              {/* Traço SVG orgânico semelhante a marca-texto passado manualmente */}
              <svg
                aria-hidden="true"
                viewBox="0 0 360 36"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-0.5 left-0 z-0 h-[58%] w-full"
              >
                <path
                  d="M6,23 C54,14 118,26 184,18 C246,11 304,22 354,15 L350,31 C298,35 236,27 176,32 C112,37 52,29 3,33 Z"
                  fill="#4B8FE8"
                  fillOpacity="0.48"
                />
                <path
                  d="M12,18 C72,11 142,20 214,13 C274,8 320,16 356,12 L352,24 C304,27 242,21 178,26 C114,31 54,23 9,27 Z"
                  fill="#6EA8F2"
                  fillOpacity="0.34"
                />
              </svg>
              <span className="relative z-10">O que vem no plano</span>
            </span>
          </h2>

          <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-[#1D3557] sm:text-base">
            Materiais visuais e práticos para ajudar você a organizar e
            acompanhar sua rotina no plano de 30 dias dividido em 4 semanas.
          </p>
        </div>

        {/* Material 1 — Card escuro (#1D3557) com maior destaque visual */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 rounded-3xl border border-[#4B8FE8]/35 bg-gradient-to-br from-[#1D3557] to-[#172B47] p-6 text-left shadow-[0_20px_44px_-18px_rgba(8,15,30,0.45)] transition-all duration-200 hover:border-[#8EAFD2]/60 sm:p-8 lg:mb-6 lg:p-9"
        >
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-3.5 lg:col-span-7">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#4B8FE8]/35 bg-[#26456F] text-[#EAF1F9]">
                  <FeaturedIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-display text-xs font-bold tracking-wide text-[#CFE3F8] tabular-nums">
                    {FEATURED_MATERIAL.number} · Estrutura central do plano
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {FEATURED_MATERIAL.title}
                  </h3>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-[#D8E9FA] sm:text-base">
                {FEATURED_MATERIAL.description}
              </p>
            </div>

            <div className="rounded-2xl border border-[#4B8FE8]/30 bg-[#132642] p-4 sm:p-5 lg:col-span-5">
              <p className="mb-3 font-display text-xs font-bold tracking-wide text-[#CFE3F8]">
                Como este guia organiza sua prática:
              </p>
              <ul className="space-y-2.5">
                {FEATURED_MATERIAL.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#EAF1F9]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#26456F] text-[#7CB5F9]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>

        {/* Materiais 2, 3 e 4 — Cards em azul escuro (#1D3557) com contraste elegante */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {SECONDARY_MATERIALS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-2xl border border-[#4B8FE8]/30 bg-gradient-to-b from-[#1D3557] to-[#182D4B] p-5 text-left shadow-[0_16px_36px_-18px_rgba(8,15,30,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8EAFD2]/60 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#4B8FE8]/35 bg-[#26456F] text-[#EAF1F9]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-display text-xs font-bold text-[#CFE3F8] tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#D8E9FA]">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-1.5 border-t border-[#315B88]/60 pt-4">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs font-medium text-[#D8E9FA] sm:text-[13px]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6EA8F2]"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
