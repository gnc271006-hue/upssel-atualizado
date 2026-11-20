import { motion } from 'motion/react';

export function ProductPresentation() {
  return (
    <section
      aria-labelledby="product-presentation-heading"
      className="bg-[#EAF1F9] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <h2
            id="product-presentation-heading"
            className="mx-auto max-w-2xl text-center font-display text-2xl leading-tight font-bold tracking-tight text-balance text-[#080F1E] sm:text-3xl"
          >
            Uma prática mais organizada, semana após semana
          </h2>

          <div className="mx-auto max-w-2xl border-t border-[#8EAFD2]/45 pt-5">
            <p className="text-left text-base leading-relaxed text-[#1D3557] sm:text-lg">
              O Plano de Prática Guiada reúne materiais complementares para
              ajudar você a organizar e acompanhar sua rotina de exercícios ao
              longo do plano de 30 dias dividido em 4 semanas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
