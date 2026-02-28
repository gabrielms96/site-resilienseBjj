export interface Slot {
  time: string;
  type: string;
}

export interface ScheduleDay {
  day: string;
  slots: Slot[];
}

export const RESILIENCE = {
  gymName: "Resilience Brazilian Jiu Jitsu",
  city: "São Sebastião do Paraíso - MG",
  instagramGym: "resiliencebjj.ssp",
  coachName: "Igor Nascimento",
  instagramCoach: "igorsantanan",
  phoneIntl: "+5535988826260",
  phonePretty: "+55 35 98882-6260",
  address:
    "R. Custódio Nascimento, 199 - Braz, São Sebastião do Paraíso - MG",
  mapsQuery: "Resilience Brazilian Jiu Jitsu",
  schedule: [
    {
      day: "Segunda-feira",
      slots: [
        { time: "06:00", type: "Adulto" },
        { time: "18:30", type: "Adulto" },
        { time: "19:30", type: "Adulto" },
      ],
    },
    {
      day: "Terça-feira",
      slots: [
        { time: "08:30", type: "Kids" },
        { time: "18:30", type: "Kids" },
        { time: "19:30", type: "Adulto" },
      ],
    },
    {
      day: "Quarta-feira",
      slots: [
        { time: "06:00", type: "Adulto" },
        { time: "18:30", type: "Adulto" },
        { time: "19:30", type: "Adulto" },
      ],
    },
    {
      day: "Quinta-feira",
      slots: [
        { time: "08:30", type: "Kids" },
        { time: "18:30", type: "Kids" },
        { time: "19:30", type: "Adulto" },
      ],
    },
    {
      day: "Sexta-feira",
      slots: [
        { time: "06:00", type: "Adulto No-Gi" },
        { time: "18:30", type: "Adulto No-Gi" },
      ],
    },
  ] as ScheduleDay[],
} as const;

/* ---------- helpers ---------- */

export function waLink(phone: string, text: string): string {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${msg}`;
}

export function igLink(handle: string): string {
  return `https://instagram.com/${handle.replace("@", "")}`;
}

export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/* ---------- derived values ---------- */

const defaultMsg =
  "Olá! Quero agendar uma aula experimental gratuita na Resilience BJJ.";

export const WA_DEFAULT = waLink(RESILIENCE.phoneIntl, defaultMsg);
export const IG_GYM = igLink(RESILIENCE.instagramGym);
export const IG_COACH = igLink(RESILIENCE.instagramCoach);
export const MAPS_URL = mapsLink(RESILIENCE.mapsQuery);
export const MAPS_EMBED = mapsEmbedUrl(RESILIENCE.mapsQuery);

/* ---------- schedule helpers ---------- */

export function dayTag(slots: Slot[]): string {
  const hasKids = slots.some((s) =>
    s.type.toLowerCase().includes("kids"),
  );
  const hasNogi = slots.some(
    (s) =>
      s.type.toLowerCase().includes("no-gi") ||
      s.type.toLowerCase().includes("nogi"),
  );
  if (hasKids && hasNogi) return "Kids • No-Gi";
  if (hasKids) return "Kids • Adulto";
  if (hasNogi) return "No-Gi";
  return "Adulto";
}

export function makeSlotMessage(
  day: string,
  time: string,
  type: string,
): string {
  return (
    `Olá! Quero agendar uma aula experimental gratuita na Resilience BJJ.\n` +
    `Tenho interesse no horário: ${day} ${time} (${type}).\n`
  );
}
