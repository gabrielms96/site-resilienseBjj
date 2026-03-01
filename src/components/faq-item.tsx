import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MOTION } from "../lib/motion-tokens";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const questionId = `faq-q-${question.slice(0, 10).toLowerCase().replace(/\s+/g, "-")}`;
  const answerId = `faq-a-${question.slice(0, 10).toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div
      className="rounded-r20 border border-white/10 bg-white/[0.03] overflow-hidden"
      role="region"
      aria-labelledby={questionId}
    >
      <button
        id={questionId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex cursor-pointer items-center justify-between gap-3 px-3.5 py-3 font-[950] text-left hover:bg-white/[0.05] transition-colors"
        aria-expanded={isOpen}
        aria-controls={answerId}
        type="button"
      >
        <span>{question}</span>
        <motion.svg
          className="h-5 w-5 flex-shrink-0 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: MOTION.duration.normal / 1000, ease: "easeOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, height: 0 },
              animate: {
                opacity: 1,
                height: "auto",
                transition: {
                  duration: MOTION.duration.normal / 1000,
                  ease: "easeOut",
                },
              },
              exit: {
                opacity: 0,
                height: 0,
                transition: {
                  duration: MOTION.duration.normal / 1000,
                  ease: "easeIn",
                },
              },
            }}
            className="overflow-hidden border-t border-white/[0.05]"
          >
            <p id={answerId} className="px-3.5 py-3 leading-[1.6] text-muted m-0">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
