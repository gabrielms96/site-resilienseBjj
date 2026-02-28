import {
    IG_COACH,
    IG_GYM,
    RESILIENCE,
    WA_DEFAULT,
} from "../config/resilience";

export default function FooterSection() {
  return (
    <footer className="mt-4 border-t border-white/[0.06] pb-2 pt-[18px] text-[13px] text-muted">
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div>
          <b className="text-text">Resilience BJJ</b> •{" "}
          {RESILIENCE.city}
          <br />
          <span>© {new Date().getFullYear()} • Todos os direitos reservados.</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            className="rounded-[12px] px-2.5 py-2 hover:bg-white/5 hover:text-text"
            href={IG_GYM}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="rounded-[12px] px-2.5 py-2 hover:bg-white/5 hover:text-text"
            href={IG_COACH}
            target="_blank"
            rel="noreferrer"
          >
            Professor
          </a>
          <a
            className="rounded-[12px] px-2.5 py-2 hover:bg-white/5 hover:text-text"
            href={WA_DEFAULT}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
