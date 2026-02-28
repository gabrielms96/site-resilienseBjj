import Tile from "./tile";
import TileGrid from "./tile-grid";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-[22px]">
      <h2 className="mb-1.5 mt-0 text-[22px] font-bold tracking-[-0.02em]">
        Por que treinar na Resilience?
      </h2>
      <p className="m-0 leading-[1.6] text-muted">
        Treino certo no nível certo - pra você continuar e sentir resultado.
      </p>

      <TileGrid className="mt-3">
        <Tile
          icon="🎯"
          title="Evolução visível"
          description="Você sai da aula sabendo o que treinar e como melhorar no próximo rola(sparring)."
        />
        <Tile
          icon="🧠"
          title="Técnica + estratégia"
          description="Não é só &quot;força&quot;: é posicionamento, timing e decisões inteligentes."
        />
        <Tile
          icon="🛡️"
          title="Segurança no treino"
          description="Base bem feita e progressão. Perfeito pra quem está começando."
        />
      </TileGrid>
    </section>
  );
}
