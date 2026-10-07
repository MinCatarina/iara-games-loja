import { useEffect } from "react";
import { games } from "../data/games";
import { formatPrice } from "../utils/format";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const { items, changeQty, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const lines = items
    .map((i) => ({ ...i, game: games.find((g) => g.id === i.id) }))
    .filter((l) => l.game);
  const total = lines.reduce((sum, l) => sum + l.game.preco * l.qtd, 0);

  return (
    <>
      <div className={`overlay overlay--side ${open ? "is-open" : ""}`} onClick={onClose} aria-hidden="true" />
      <aside className={`drawer ${open ? "is-open" : ""}`} aria-label="Carrinho de compras" aria-hidden={!open}>
        <div className="drawer__head">
          <h2>Seu carrinho</h2>
          <button type="button" className="modal__close modal__close--static" onClick={onClose} aria-label="Fechar carrinho">
            ✕
          </button>
        </div>

        {lines.length === 0 ? (
          <p className="drawer__empty">Seu carrinho está vazio. Que tal explorar os jogos brasileiros?</p>
        ) : (
          <>
            <ul className="drawer__list">
              {lines.map(({ game, qtd }) => (
                <li key={game.id} className="line">
                  <img src={`./images/${game.imagem}`} alt="" />
                  <div className="line__info">
                    <strong>{game.nome}</strong>
                    <span>{formatPrice(game.preco)}</span>
                    <div className="qty">
                      <button type="button" onClick={() => changeQty(game.id, -1)} aria-label={`Diminuir quantidade de ${game.nome}`}>−</button>
                      <span aria-live="polite">{qtd}</span>
                      <button type="button" onClick={() => changeQty(game.id, 1)} aria-label={`Aumentar quantidade de ${game.nome}`}>+</button>
                    </div>
                  </div>
                  <button type="button" className="link-btn" onClick={() => removeFromCart(game.id)}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="drawer__foot">
              <div className="total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button type="button" className="btn btn--primary btn--block" onClick={() => alert("Compra simulada! Esta é uma loja de demonstração.")}>
                Finalizar compra
              </button>
              <button type="button" className="link-btn" onClick={clearCart}>
                Esvaziar carrinho
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
