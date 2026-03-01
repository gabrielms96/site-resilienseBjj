import type { Slot as SlotType } from '../config/resilience'
import { makeSlotMessage, RESILIENCE, waLink } from '../config/resilience'

interface SlotProps {
  day: string;
  slot: SlotType;
}

function TypeLabel({ type }: { type: string }) {
  const norm = type.toLowerCase()
  if (norm.includes('kids')) {
    return (
      <span className="text-xs font-[850] text-muted">
        <b className="text-pink">Kids</b>
      </span>
    )
  }
  if (norm.includes('no-gi') || norm.includes('nogi')) {
    return (
      <span className="text-xs font-[850] text-muted">
        <b className="text-pink">No-Gi</b> (Adulto)
      </span>
    )
  }
  return (
    <span className="text-xs font-[850] text-muted">
      <b className="text-pink">Adulto</b>
    </span>
  )
}

export default function Slot({ day, slot }: SlotProps) {
  const href = waLink(
    RESILIENCE.phoneIntl,
    makeSlotMessage(day, slot.time, slot.type),
  )

  return (
    <div className="flex items-center justify-between gap-2.5 rounded-r16 border border-white/10 bg-black/[0.18] p-3">
      <div className="grid gap-0.5">
        <div className="font-[950] tracking-[-0.01em]">{slot.time}</div>
        <TypeLabel type={slot.type} />
      </div>
      <a
        className="whitespace-nowrap rounded-[14px] border border-red/30 bg-red/10 px-3 py-2.5 text-xs font-[950] hover:bg-red/[0.16]"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        Quero este horário
      </a>
    </div>
  )
}
