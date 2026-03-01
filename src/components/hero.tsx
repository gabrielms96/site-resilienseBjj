import { MAPS_URL, WA_DEFAULT } from '../config/resilience'
import CoachCard from './coach-card'
import Tile from './tile'
import TileGrid from './tile-grid'

export default function Hero() {
  return (
    <section className="grid gap-3.5 pb-[52px] pt-[22px]" id="top">
      {/* Pill */}
      <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-white/[0.03] px-3.5 py-2.5 text-[13px] font-[800] text-muted backdrop-blur-[10px]">
        <span className="size-2 rounded-full bg-red shadow-[0_0_0_4px_rgba(255,27,45,0.15)]" />
        <span>
          Aula experimental{' '}
          <b className="text-pink">gratuita</b> • Vagas limitadas
        </span>
      </span>

      <h1 className="mx-0 mb-2 mt-3 text-[clamp(30px,6vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Treine Jiu Jitsu com método, energia e um time que te puxa pra cima.
      </h1>

      <p className="m-0 max-w-[70ch] text-[15.5px] leading-[1.65] text-muted">
        Quer sair do "vou começar" e finalmente entrar no tatame? A Resilience é
        pra quem busca <b className="text-text">evolução</b>,{' '}
        <b className="text-text">disciplina</b> e treino de verdade - do
        iniciante ao avançado.
      </p>

      {/* Hero CTAs */}
      <div className="mt-3.5 flex flex-wrap gap-2.5">
        <a
          className="btn-base btn-primary"
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
        >
          Agendar aula gratuita (WhatsApp)
        </a>
        <a className="btn-base" href="#horarios">
          Ver horários
        </a>
        <a
          className="btn-base btn-ghost"
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
        >
          Como chegar
        </a>
      </div>

      {/* Benefit tiles */}
      <TileGrid className="mt-2.5">
        <Tile
          icon="🥋"
          title="Aprendizado estruturado"
          description="Você entende o jogo e evolui com consistência - técnica, detalhes e aplicação."
        />
        <Tile
          icon="⚡"
          title="Condicionamento e confiança"
          description="Melhore cardio, força e postura. Jiu Jitsu muda corpo e mente."
        />
        <Tile
          icon="🤝"
          title="Ambiente que soma"
          description="Respeito, parceria e disciplina. Aqui o time cresce junto."
        />
      </TileGrid>

      {/* Coach card */}
      <CoachCard />
    </section>
  )
}
