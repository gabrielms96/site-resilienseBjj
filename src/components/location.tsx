import {
  IG_GYM,
  MAPS_EMBED,
  MAPS_URL,
  RESILIENCE,
  WA_DEFAULT,
} from '../config/resilience'

export default function Location() {
  return (
    <section id="local" className="border-t border-white/[0.05] py-[52px]">
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Localização
      </h2>
      <p className="m-0 leading-[1.6] text-muted">{RESILIENCE.address}</p>

      {/* Map card */}
      <div className="mt-3 overflow-hidden rounded-r24 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-card">
        <div className="flex items-center justify-between gap-2.5 p-4">
          <div>
            <div className="font-[950]">Resilience BJJ</div>
            <div className="mt-0.5 text-[13px] text-muted">
              Toque em "Abrir no Maps" para rotas
            </div>
          </div>
          <a
            className="btn-base btn-ghost btn-small"
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Maps
          </a>
        </div>
        <iframe
          title="Resilience BJJ no Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={MAPS_EMBED}
          className="block h-80 w-full border-0"
        />
      </div>

      {/* CTAs */}
      <div className="mt-3 flex flex-wrap gap-2.5">
        <a
          className="btn-base btn-primary"
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
        >
          Agendar aula grátis
        </a>
        <a
          className="btn-base"
          href={IG_GYM}
          target="_blank"
          rel="noreferrer"
        >
          Ver Instagram
        </a>
      </div>
    </section>
  )
}
