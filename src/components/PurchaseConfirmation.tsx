import { CheckCircle2 } from 'lucide-react';

export function PurchaseConfirmation() {
  return (
    <div
      role="status"
      aria-label="Confirmação da compra principal"
      className="border-b border-[#1D3557]/60 bg-[#080F1E]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1D3557] text-[#8EAFD2]">
          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        </div>

        <p className="text-xs leading-snug text-[#8EAFD2] sm:text-[13px]">
          <span className="font-semibold text-white">Compra realizada!</span>{' '}
          Obrigado pela sua compra! Você receberá o Guia de Exercícios para
          Reduzir o Ronco diretamente no seu e-mail.
        </p>
      </div>
    </div>
  );
}
