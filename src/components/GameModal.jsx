import { useEffect } from "react";
import { formatPrice } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function GameModal({ game, onClose }) {
  const { addToCart, favorites, toggleFavorite } = useCart();

  // Fecha com a tecla Esc e trava a rolagem do fundo enquanto aberto.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isFav = favorites.includes(game.id);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Fechar detalhes">
          ✕
        </button>
        <img className="modal__img" src={`./images/${game.imagem}`} alt={`Capa do jogo ${game.nome}`} />
        <div className="modal__body">
          <h2 id="modal-title">{game.nome}</h2>
          <p className="card__genres">{game.generos.join(" · ")}</p>
          <p className="modal__desc">{game.descricao}</p>
          <p className="rating">★ {game.nota.toFixed(0)}% de avaliações positivas</p>
          <div className="modal__actions">
            <strong className="price price--lg">{formatPrice(game.preco)}</strong>
            <button type="button" className="btn btn--ghost" onClick={() => toggleFavorite(game.id)} aria-pressed={isFav}>
              {isFav ? "♥ Favoritado" : "♡ Favoritar"}
            </button>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                addToCart(game.id);
                onClose();
              }}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
