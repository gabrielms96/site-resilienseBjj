import { useState } from "react";
import { RESILIENCE, matchesFilter } from "../config/resilience";
import { cn } from "../lib/cn";
import ScheduleDay from "./schedule-day";

type Category = "Kids" | "Adulto" | "No-Gi";

const CATEGORIES: Category[] = ["Kids", "Adulto", "No-Gi"];
const CATEGORY_LABELS: Record<Category, string> = {
  Kids: "Kids",
  Adulto: "Adulto",
  "No-Gi": "No-Gi (sem kimono)",
};

const CATEGORY_STYLES: Record<Category, { active: string; inactive: string }> = {
  Kids: {
    active: "border-red/60 bg-red/20 text-pink",
    inactive: "border-white/[0.12] bg-white/[0.03] text-muted",
  },
  Adulto: {
    active: "border-red/60 bg-red/20 text-pink",
    inactive: "border-white/[0.12] bg-white/[0.03] text-muted",
  },
  "No-Gi": {
    active: "border-red/60 bg-red/20 text-pink",
    inactive: "border-white/[0.12] bg-white/[0.03] text-muted",
  },
};

export default function Schedule() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    CATEGORIES,
  );

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  // Filter days based on selected categories
  const filteredSchedule = RESILIENCE.schedule
    .map((day) => ({
      ...day,
      slots: day.slots.filter((slot) =>
        matchesFilter(slot.type, selectedCategories),
      ),
    }))
    .filter((day) => day.slots.length > 0);

  return (
    <section id="horarios" className="relative border-t border-white/[0.05] py-[52px]">
      {/* Ambient glow for the most-interactive section */}
      <div className="pointer-events-none absolute inset-0 rounded-r24 bg-[radial-gradient(500px_300px_at_70%_30%,rgba(255,27,45,0.07),transparent_70%)]" />
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Horários
      </h2>
      <p className="m-0 leading-[1.6] text-muted">
        Toque no dia para abrir. Depois clique em{" "}
        <b className="text-text">"Quero este horário"</b> e mande a mensagem
        pronta.
      </p>

      {/* Filter Legend */}
      <div className="mt-2.5 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategories.includes(category);
          const styles = CATEGORY_STYLES[category];
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={cn(
                "whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[11px] font-[950] transition-colors duration-200",
                isActive ? styles.active : styles.inactive,
              )}
              aria-pressed={isActive}
              type="button"
            >
              {CATEGORY_LABELS[category]}
            </button>
          );
        })}
      </div>

      {/* Schedule grid */}
      <div className="mt-3 grid gap-2.5">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((day, idx) => (
            <ScheduleDay
              key={day.day}
              data={day}
              defaultOpen={idx === 0}
            />
          ))
        ) : (
          <p className="py-6 text-center text-muted">
            Nenhum horário disponível com os filtros selecionados.
          </p>
        )}
      </div>

      <p className="mt-3 text-[13px] leading-[1.6] text-muted">
        * Horários podem variar em feriados/eventos. Confirme pelo WhatsApp.
      </p>
    </section>
  );
}
