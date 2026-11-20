import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const ALREADY_HAVE_ITEMS = [
  '9 exercícios em mapas mentais',
  '1 dica extra',
  'PDF complementar',
  '3 bônus',
];

const PLAN_ADDS_ITEMS = [
  'Quais exercícios fazer juntos',
  'Em quais dias',
  'Dividido em 4 semanas',
  'Acompanhamento diário',
];

export function PlanComparisonSection() {
  return (
    <section
      aria-labelledby="plan-comparison-heading"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="plan-comparison-heading" className="sr-only">
          O que você já tem e o que o plano acrescenta
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {/* Cartão 1: Mais discreto, sem borda de destaque */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[#D4E2F1] bg-[#182D4B] p-6 text-left shadow-[0_12px_28px_-18px_rgba(8,15,30,0.3)] sm:p-7"
          >
            <h3 className="text-center font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              Você já tem
            </h3>

            <ul className="mt-5 space-y-3 border-t border-[#315B88]/50 pt-5">
              {ALREADY_HAVE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-[#D8E9FA] sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#26456F] text-[#B8D6F5]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Cartão 2: Borda azul de 2px e leve destaque */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.35,
              delay: 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-2xl border-2 border-[#4B8FE8] bg-gradient-to-br from-[#1D3557] to-[#132642] p-6 text-left shadow-[0_20px_44px_-18px_rgba(37,107,214,0.4)] sm:p-7"
          >
            <h3 className="text-center font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              O plano acrescenta
            </h3>

            <ul className="mt-5 space-y-3 border-t border-[#4B8FE8]/35 pt-5">
              {PLAN_ADDS_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-medium text-white sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#256BD6] text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
