import type { ScheduleDay as ScheduleDayType } from "../config/resilience";
import { dayTag } from "../config/resilience";
import Slot from "./slot";

interface ScheduleDayProps {
  data: ScheduleDayType;
  defaultOpen?: boolean;
}

export default function ScheduleDay({
  data,
  defaultOpen = false,
}: ScheduleDayProps) {
  const tag = dayTag(data.slots);

  return (
    <details
      className="day-accordion overflow-hidden rounded-r20 border border-white/10 bg-white/[0.03]"
      open={defaultOpen || undefined}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-3 p-3.5 font-[950]">
        <span>{data.day}</span>
        <span className="whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-[950] text-muted">
          {tag}
        </span>
      </summary>
      <div className="grid gap-2.5 px-3.5 pb-3.5">
        {data.slots.map((slot) => (
          <Slot key={`${data.day}-${slot.time}`} day={data.day} slot={slot} />
        ))}
      </div>
    </details>
  );
}
