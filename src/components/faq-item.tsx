interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="rounded-r20 border border-white/10 bg-white/[0.03] px-3.5 py-3">
      <summary className="cursor-pointer font-[950]">{question}</summary>
      <p className="mt-2.5 mb-0 leading-relaxed text-muted">{answer}</p>
    </details>
  );
}
