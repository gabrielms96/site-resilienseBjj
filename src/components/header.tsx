import { IG_GYM, WA_DEFAULT } from "../config/resilience";

// SVG Icons inline
const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48C18.25 1.23 15.19 0 11.89 0 5.33 0 .07 5.26 .07 11.82c0 2.08.54 4.11 1.57 5.93L0 24l6.35-1.67c1.73.94 3.69 1.44 5.58 1.44 6.56 0 11.82-5.26 11.82-11.82 0-3.16-1.23-6.13-3.48-8.36zM11.89 21.85c-1.74 0-3.44-.47-4.92-1.34l-.35-.21-3.65.96.98-3.6-.23-.37C2.64 15.25 2.14 13.6 2.14 11.82 2.14 6.77 6.31 2.6 11.36 2.6c2.71 0 5.26 1.06 7.18 2.98 1.92 1.92 2.98 4.47 2.98 7.18 0 5.05-4.17 9.22-9.22 9.22zm5.04-6.88c-.27-.14-1.61-.8-1.86-.89-.24-.09-.42-.14-.6.14-.17.28-.66.88-.81 1.06-.15.18-.31.2-.57.06-.27-.14-1.13-.42-2.15-1.33-.80-.71-1.34-1.59-1.49-1.86-.15-.28-.02-.43.11-.57.12-.12.27-.32.4-.47.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.51-.44-.44-.59-.45h-.5c-.18 0-.47.07-.72.34-.26.27-.99.97-.99 2.36 0 1.39.99 2.74 1.13 2.93.14.18 1.99 3.04 4.82 4.27 2.83 1.23 2.83.82 3.34.77.51-.05 1.61-.66 1.84-1.29.22-.63.22-1.17.15-1.29-.07-.12-.27-.19-.57-.32z" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(7,7,8,0.82)] pt-[var(--safe-top)] backdrop-blur-[12px]">
      <div className="mx-auto w-[min(1100px,calc(100%-28px))] max-[520px]:w-[calc(100%-22px)]">
        <div className="flex flex-wrap items-center justify-between gap-2.5 py-2 max-[520px]:gap-2 max-[520px]:justify-center">
          {/* Brand */}
          <a
            className="flex min-w-0 flex-[1_1_260px] items-center gap-2.5 max-[520px]:flex-[1_1_auto] max-[520px]:gap-2 max-[520px]:justify-start"
            href="#top"
            aria-label="Resilience BJJ"
          >
            <img
              src="/logo.png"
              alt="Logo Resilience BJJ"
              className="h-10 w-10 flex-none rounded-[12px] border border-white/[0.12] bg-black object-cover"
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
              <span className="hidden max-[520px]:inline-flex items-center gap-1">
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
                <WhatsAppIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
