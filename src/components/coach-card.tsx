import {
    IG_COACH,
    RESILIENCE,
    WA_DEFAULT,
} from "../config/resilience";

export default function CoachCard() {
  return (
    <div className="mt-3 overflow-hidden rounded-r24 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-card">
      <div className="p-4">
        <span className="inline-flex items-center gap-2 rounded-[14px] border border-red/30 bg-red/[0.12] px-3 py-[9px] text-[13px] font-[950] text-pink">
          🔥 Aula experimental gratuita • Comece essa semana
        </span>

        {/* Divider */}
        <div className="my-3.5 h-px bg-white/[0.08]" />

        {/* Coach row */}
        <div className="flex items-center gap-3">
          <div
            className="avatar-gradient flex h-[50px] w-[50px] items-center justify-center rounded-r16 border border-white/[0.12] font-[950]"
            aria-hidden="true"
          >
            IS
          </div>
          <div className="min-w-0">
            <div className="font-[950]">{RESILIENCE.coachName}</div>
            <div className="mt-[3px] text-[13px] text-muted">
              Professor • {RESILIENCE.phonePretty}
            </div>
          </div>
        </div>

        {/* Coach actions */}
        <div className="mt-3 flex flex-wrap gap-2.5">
          <a
            className="btn-base btn-primary"
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
          <a
            className="btn-base"
            href={IG_COACH}
            target="_blank"
            rel="noreferrer"
          >
            Instagram do Professor
          </a>
        </div>

        {/* Divider */}
        <div className="my-3.5 h-px bg-white/[0.08]" />

        <div className="text-[13px] leading-relaxed text-muted">
          <b className="text-text">Endereço:</b> {RESILIENCE.address}
        </div>
      </div>
    </div>
  );
}
