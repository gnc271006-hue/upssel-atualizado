import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

const COVER_IMAGE_PATH =
  '/assets/aistudio/Plano_de_Pr_tica_Guiada_do_Sono_2084bce3.jpg';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden bg-[#080F1E] pt-7 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      {/* Brilho atmosférico sutil em tons de azul noturno */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#1D3557]/40 blur-3xl lg:right-12 lg:h-[520px] lg:w-[520px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-72 rounded-full bg-[#101D35]/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Coluna principal: Títulos e subtítulo centralizados */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-center sm:space-y-5 lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-wide text-[#8EAFD2] sm:text-sm">
              Plano de Prática Guiada — 4 Semanas
            </p>

            <h1
              id="hero-headline"
              className="mx-auto max-w-[26ch] font-display text-[1.45rem] leading-[1.34] font-bold tracking-tight text-white sm:max-w-[30ch] sm:text-[1.95rem] sm:leading-[1.28] lg:max-w-none lg:text-[2.28rem] lg:leading-[1.22]"
            >
              Você já tem os exercícios. Agora falta saber{' '}
              <span className="hand-highlight font-extrabold text-white">
                quais fazer juntos e em quais dias
              </span>
              .
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-[#A8C4E0] sm:text-lg">
              Plano de{' '}
              <span className="hand-highlight font-bold text-white">
                30 dias dividido em 4 semanas
              </span>
              , com mapas mentais semanais e checklists para acompanhar cada
              dia.
            </p>

            <div className="hidden justify-center border-t border-[#1D3557]/80 pt-5 text-xs font-medium text-[#8EAFD2] sm:flex sm:items-center sm:gap-4 sm:text-sm">
              <span>Material complementar em PDF</span>
              <span className="text-[#315B88]" aria-hidden="true">
                ·
              </span>
              <span>4 mapas mentais semanais</span>
              <span className="text-[#315B88]" aria-hidden="true">
                ·
              </span>
              <span>Checklists práticos</span>
            </div>
          </motion.div>

          {/* Coluna secundária: Capa do produto em destaque */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5"
          >
            <div className="mx-auto w-full max-w-[390px] sm:max-w-[430px] lg:max-w-none">
              <div className="rounded-3xl border border-[#1D3557] bg-gradient-to-b from-[#101D35] to-[#0B1528] p-3 shadow-[0_28px_64px_-20px_rgba(0,0,0,0.7)] sm:p-4">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-[#080F1E] p-1.5 sm:p-2">
                  {!imageError ? (
                    <img
                      src={COVER_IMAGE_PATH}
                      alt="Capa do material digital Plano de Prática Guiada — 4 Semanas de Organização dos Exercícios para o Ronco"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="h-full w-full rounded-xl object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#101D35] to-[#1D3557] p-6 text-center text-white">
                      <BookOpen
                        className="mb-3 h-10 w-10 text-[#8EAFD2]"
                        aria-hidden="true"
                      />
                      <p className="font-display text-lg font-bold">
                        Plano de Prática Guiada — 4 Semanas
                      </p>
                      <p className="mt-1 text-xs text-[#8EAFD2]">
                        4 Semanas de Organização dos Exercícios para o Ronco
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
