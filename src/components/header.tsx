import { IG_GYM, WA_DEFAULT } from '../config/resilience'
import { InstagramIcon, WhatsAppIcon } from './icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(7,7,8,0.82)] pt-[var(--safe-top)] backdrop-blur-[12px]">
      <div className="mx-auto w-[min(1100px,calc(100%-28px))] max-[520px]:w-[calc(100%-22px)]">
        <div className="flex flex-wrap items-center justify-between gap-2.5 py-2 max-[520px]:justify-center max-[520px]:gap-2">
          {/* Brand */}
          <a
            className="flex min-w-0 flex-[1_1_260px] items-center gap-2.5 max-[520px]:flex-[1_1_auto] max-[520px]:justify-start max-[520px]:gap-2"
            href="#top"
            aria-label="Resilience BJJ"
          >
            <img
              src="/logo.png"
              alt="Logo Resilience BJJ"
              className="size-10 flex-none rounded-[12px] border border-white/[0.12] bg-black object-cover"
            />
            <div className="min-w-0">
              <div className="font-[950] leading-[1.1] tracking-[-0.02em] max-[520px]:text-[13px]">
                Resilience BJJ
              </div>
              <div className="mt-0.5 text-xs text-muted max-[520px]:text-[11px] max-[520px]:leading-[1.2]">
                Kids • Adulto • No-Gi • SSP/MG
              </div>
            </div>
          </a>

          {/* Nav CTAs */}
          <div className="flex flex-[1_1_220px] items-center justify-end gap-2.5 max-[520px]:flex-[1_1_auto] max-[520px]:gap-2">
            <a
              className="btn-base btn-ghost btn-small max-[520px]:px-2.5 max-[520px]:py-1.5"
              href={IG_GYM}
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <span className="max-[520px]:hidden">Instagram</span>
              <span className="hidden items-center gap-1 max-[520px]:inline-flex">
                <InstagramIcon />
              </span>
            </a>
            <a
              className="btn-base btn-primary max-[520px]:px-3 max-[520px]:py-1.5 max-[520px]:text-[12px]"
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="max-[520px]:hidden">Aula grátis • Agendar</span>
                <span className="hidden max-[520px]:inline">Agendar</span>
                <WhatsAppIcon className="hidden max-[520px]:inline" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
