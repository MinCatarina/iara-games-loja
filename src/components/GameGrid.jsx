import GameCard from "./GameCard";

export default function GameGrid({ games, onOpen, onClear }) {
  if (games.length === 0) {
    return (
      <div className="empty" role="status">
        <p>Nenhum jogo encontrado com esses filtros.</p>
        <button type="button" className="btn btn--ghost" onClick={onClear}>
          Limpar busca e filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid">
      {games.map((g) => (
        <GameCard key={g.id} game={g} onOpen={onOpen} />
      ))}
    </div>
  );
}
