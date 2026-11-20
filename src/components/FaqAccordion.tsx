import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'substitui-ebook',
    question: 'O Plano de Prática Guiada substitui o ebook principal?',
    answer:
      'Não. Ele é um material complementar ao Guia de Exercícios para Reduzir o Ronco.',
  },
  {
    id: 'como-receberei',
    question: 'Como receberei o Plano de Prática Guiada?',
    answer:
      'Após a confirmação da aquisição do plano complementar, o acesso será disponibilizado conforme as instruções de entrega da Hotmart.',
  },
  {
    id: 'preciso-guia-principal',
    question: 'Preciso ter adquirido o guia principal para utilizar o plano?',
    answer:
      'Sim. O Plano de Prática Guiada foi desenvolvido como material complementar aos exercícios apresentados no guia principal.',
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#EAF1F9] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl space-y-2 text-center sm:mb-10">
          <h2
            id="faq-heading"
            className="font-display text-2xl leading-tight font-bold tracking-tight text-[#080F1E] sm:text-3xl"
          >
            Perguntas frequentes
          </h2>
          <p className="text-sm leading-relaxed text-[#315B88] sm:text-base">
            Dúvidas sobre o acesso e o funcionamento do material complementar.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border bg-white transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#315B88]/55 shadow-[0_8px_24px_-16px_rgba(8,15,30,0.2)]'
                    : 'border-[#D1E0F0] hover:border-[#8EAFD2]'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[54px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-3.5 text-left font-display text-[15px] font-semibold text-[#080F1E] focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315B88] sm:px-6 sm:py-4 sm:text-base"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen
                          ? 'bg-[#101D35] text-white'
                          : 'bg-[#EAF1F9] text-[#1D3557]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#EAF1F9] px-5 pt-3 pb-4 text-left text-sm leading-relaxed text-[#1D3557] sm:px-6 sm:text-[15px]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
