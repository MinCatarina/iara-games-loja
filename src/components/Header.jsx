import { useCart } from "../context/CartContext";

export default function Header({ onOpenCart, onToggleFavorites, showingFavorites }) {
  const { count, favorites } = useCart();

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="./" aria-label="Iara Games - Loja">
          <img src="./images/logo-iara-games.svg" alt="" width="40" height="40" />
          <span>Iara Games</span>
        </a>

        <nav className="header__actions" aria-label="Ações da loja">
          <button
            type="button"
            className={`btn btn--ghost ${showingFavorites ? "is-active" : ""}`}
            onClick={onToggleFavorites}
            aria-pressed={showingFavorites}
          >
            ♥ Favoritos <span className="pill">{favorites.length}</span>
          </button>
          <button type="button" className="btn btn--primary" onClick={onOpenCart}>
            Carrinho <span className="pill pill--dark">{count}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
