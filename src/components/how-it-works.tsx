import Tile from './tile'
import TileGrid from './tile-grid'

export default function HowItWorks() {
  return (
    <section id="como" className="border-t border-white/[0.05] py-[52px]">
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Como é a primeira aula
      </h2>
      <p className="m-0 leading-[1.6] text-muted">
        Sem pressão. Você começa no seu ritmo e já sai entendendo o jogo.
      </p>

      <TileGrid className="mt-3">
        <Tile
          icon="1️⃣"
          title="Escolha um horário"
          description="Abra os horários e clique em &quot;Quero este horário&quot; para agendar."
        />
        <Tile
          icon="2️⃣"
          title="Chegue 10 min antes"
          description="Pra conhecer o espaço e alinhar seu objetivo e nível."
        />
        <Tile
          icon="3️⃣"
          title="Treine e sinta"
          description="Técnica guiada + rola (sparring) no nível certo. Evolução desde a primeira semana."
        />
      </TileGrid>

      {/* Kimono FAQ card */}
      <div className="mt-3 overflow-hidden rounded-r24 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-card">
        <div className="p-4">
          <div className="mb-1.5 font-[950]">Kimono é obrigatório?</div>
          <div className="leading-[1.6] text-muted">
            Se você ainda não tem kimono, chama no WhatsApp e a gente orienta
            como será sua aula experimental gratuita.
          </div>
        </div>
      </div>
    </section>
  )
}
