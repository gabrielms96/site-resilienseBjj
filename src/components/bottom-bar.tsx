import { WA_DEFAULT } from "../config/resilience";

export default function BottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/[0.08] bg-[rgba(7,7,8,0.75)] px-3 pb-[calc(10px+var(--safe-bottom))] pt-2.5 backdrop-blur-[12px]"
      role="navigation"
      aria-label="Ações rápidas"
    >
      <div className="mx-auto flex w-[min(1100px,calc(100%-16px))] gap-2.5">
        <a
          className="flex-1 rounded-r16 border border-red/55 bg-[linear-gradient(135deg,#ff1b2d_0%,#ff3c4b_55%,#ff6a75_100%)] py-3 text-center text-[14px] font-[950] text-[#0b0b0c]"
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
        >
          Aula grátis • WhatsApp
        </a>
        <a
          className="flex-1 rounded-r16 border border-white/[0.12] bg-white/[0.04] py-3 text-center text-[14px] font-[950]"
          href="#horarios"
        >
          Horários
        </a>
      </div>
    </div>
  );
}
