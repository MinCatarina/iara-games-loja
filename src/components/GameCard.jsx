import { formatPrice } from "../utils/format";
import { useCart } from "../context/CartContext";

const selos = { novo: "Novo", essencial: "Essencial" };

export default function GameCard({ game, onOpen }) {
  const { favorites, toggleFavorite, addToCart } = useCart();
  const isFav = favorites.includes(game.id);

  return (
    <article className="card">
      <button type="button" className="card__media" onClick={() => onOpen(game)} aria-label={`Ver detalhes de ${game.nome}`}>
        <img src={`./images/${game.imagem}`} alt={`Capa do jogo ${game.nome}`} loading="lazy" />
        {game.selo && <span className={`badge badge--${game.selo}`}>{selos[game.selo]}</span>}
      </button>

      <button
        type="button"
        className={`fav ${isFav ? "is-active" : ""}`}
        onClick={() => toggleFavorite(game.id)}
        aria-pressed={isFav}
        aria-label={isFav ? `Remover ${game.nome} dos favoritos` : `Favoritar ${game.nome}`}
      >
        ♥
      </button>

      <div className="card__body">
        <div className="card__top">
          <h3 className="card__title">{game.nome}</h3>
          <span className="rating" title="Nota dos jogadores">★ {game.nota.toFixed(0)}%</span>
        </div>
        <p className="card__genres">{game.generos.join(" · ")}</p>
        <div className="card__bottom">
          <strong className="price">{formatPrice(game.preco)}</strong>
          <button type="button" className="btn btn--primary btn--sm" onClick={() => addToCart(game.id)}>
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}
