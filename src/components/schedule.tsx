import { RESILIENCE } from "../config/resilience";
import ScheduleDay from "./schedule-day";

export default function Schedule() {
  return (
    <section id="horarios" className="py-[22px]">
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Horários
      </h2>
      <p className="m-0 leading-[1.6] text-muted">
        Toque no dia para abrir. Depois clique em{" "}
        <b className="text-text">"Quero este horário"</b> e mande a mensagem
        pronta.
      </p>

      {/* Legend */}
      <div className="mt-2.5 flex flex-wrap gap-2">
        <span className="whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-[950] text-muted">
          Kids
        </span>
        <span className="whitespace-nowrap rounded-full border border-red/35 bg-red/10 px-2.5 py-1.5 text-[11px] font-[950] text-pink">
          Adulto
        </span>
        <span className="whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-[950] text-muted">
          No-Gi (sem kimono)
        </span>
      </div>

      {/* Schedule grid */}
      <div className="mt-3 grid gap-2.5">
        {RESILIENCE.schedule.map((day, idx) => (
          <ScheduleDay
            key={day.day}
            data={day}
            defaultOpen={idx === 0}
          />
        ))}
      </div>

      <p className="mt-3 text-[13px] leading-[1.6] text-muted">
        * Horários podem variar em feriados/eventos. Confirme pelo WhatsApp.
      </p>
    </section>
  );
}
