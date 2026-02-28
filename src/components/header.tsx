import { IG_GYM, WA_DEFAULT } from "../config/resilience";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(7,7,8,0.70)] pt-[var(--safe-top)] backdrop-blur-[12px]">
      <div className="mx-auto w-[min(1100px,calc(100%-28px))] max-[520px]:w-[calc(100%-22px)]">
        <div className="flex flex-wrap items-center justify-between gap-2.5 py-3 max-[520px]:justify-center">
          {/* Brand */}
          <a
            className="flex min-w-0 flex-[1_1_260px] items-center gap-2.5 max-[520px]:flex-[1_1_100%] max-[520px]:justify-center max-[520px]:text-center"
            href="#top"
            aria-label="Resilience BJJ"
          >
            <img
              src="/logo.jpeg"
              alt="Logo Resilience BJJ"
              className="h-10 w-10 flex-none rounded-[12px] border border-white/[0.12] bg-[#111] object-cover"
            />
            <div>
              <div className="font-[950] leading-[1.1] tracking-[-0.02em]">
                Resilience BJJ
              </div>
              <div className="mt-0.5 text-xs text-muted">
                Kids • Adulto • No-Gi • SSP/MG
              </div>
            </div>
          </a>

          {/* Nav CTAs */}
          <div className="flex flex-[1_1_220px] flex-wrap items-center justify-end gap-2.5 max-[520px]:flex-[1_1_100%] max-[520px]:justify-center">
            <a
              className="btn-base btn-ghost btn-small"
              href={IG_GYM}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="btn-base btn-primary"
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
            >
              Aula grátis • Agendar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
