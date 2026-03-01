import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { ScheduleDay as ScheduleDayType } from '../config/resilience'
import { dayTag } from '../config/resilience'
import { MOTION } from '../lib/motion-tokens'
import Slot from './slot'

interface ScheduleDayProps {
  data: ScheduleDayType;
  defaultOpen?: boolean;
}

export default function ScheduleDay({
  data,
  defaultOpen = false,
}: ScheduleDayProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const tag = dayTag(data.slots)
  const dayId = `schedule-day-${data.day.replace(/\s+/g, '-').toLowerCase()}`
  const slotsId = `schedule-slots-${data.day.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <div
      className="overflow-hidden rounded-r20 border border-white/10 bg-white/[0.03]"
      role="region"
      aria-labelledby={dayId}
    >
      <button
        id={dayId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 p-3.5 text-left font-[950] transition-colors hover:bg-white/[0.05]"
        aria-expanded={isOpen}
        aria-controls={slotsId}
        type="button"
      >
        <span>{data.day}</span>
        <div className="flex items-center gap-2.5">
          <span className="whitespace-nowrap rounded-full border border-white/[0.12] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-[950] text-muted">
            {tag}
          </span>
          <motion.svg
            className="size-5 shrink-0 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              rotate: isOpen
                ? 180
                : 0,
            }}
            transition={{
              duration: MOTION.duration.normal / 1000,
              ease: 'easeOut',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="slots"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                duration: MOTION.duration.normal / 1000,
                ease: 'easeOut',
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                duration: MOTION.duration.normal / 1000,
                ease: 'easeIn',
              },
            }}
            className="overflow-hidden border-t border-white/[0.05]"
          >
            <div id={slotsId} className="grid gap-2.5 p-3.5">
              {data.slots.map((slot, idx) => (
                <motion.div
                  key={`${data.day}-${slot.time}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (idx * MOTION.duration.fast) / 1000,
                    duration: MOTION.duration.normal / 1000,
                    ease: 'easeOut',
                  }}
                >
                  <Slot day={data.day} slot={slot} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
