import FaqItem from "./faq-item";

const FAQ_DATA = [
  {
    question: "A aula experimental é gratuita?",
    answer:
      "Sim. A aula experimental é gratuita. É só chamar no WhatsApp e escolher um horário.",
  },
  {
    question: "Preciso ter condicionamento para começar?",
    answer:
      "Não. Você começa no seu ritmo e vai evoluindo com consistência. O treino se adapta ao seu nível.",
  },
  {
    question: "Tem turma para crianças (Kids)?",
    answer:
      "Sim. Kids com foco em disciplina, coordenação, respeito e confiança.",
  },
  {
    question: "O que é No-Gi?",
    answer:
      "No-Gi é Jiu Jitsu sem kimono. Trabalha velocidade, pegadas diferentes e adaptação.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-white/[0.05] py-[52px]">
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Dúvidas rápidas
      </h2>
      <p className="m-0 leading-[1.6] text-muted">
        As perguntas mais comuns no direct/WhatsApp.
      </p>

      <div className="mt-3 grid gap-2.5">
        {FAQ_DATA.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}
