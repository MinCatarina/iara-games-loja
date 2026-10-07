import { allGenres } from "../data/games";
import { formatPrice } from "../utils/format";

export default function FilterPanel({ selectedGenres, onToggleGenre, maxPrice, priceLimit, onMaxPrice, onClear }) {
  return (
    <aside className="filters" aria-label="Filtros">
      <div className="filters__head">
        <h2>Filtros</h2>
        <button type="button" className="link-btn" onClick={onClear}>Limpar</button>
      </div>

      <fieldset className="filters__group">
        <legend>Gênero</legend>
        <div className="chips">
          {allGenres.map((g) => {
            const active = selectedGenres.includes(g);
            return (
              <button
                key={g}
                type="button"
                className={`chip ${active ? "is-active" : ""}`}
                aria-pressed={active}
                onClick={() => onToggleGenre(g)}
              >
                {g}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="filters__group">
        <label htmlFor="preco-max">
          Preço máximo: <strong>{formatPrice(maxPrice)}</strong>
        </label>
        <input
          id="preco-max"
          type="range"
          min="10"
          max={priceLimit}
          step="1"
          value={maxPrice}
          onChange={(e) => onMaxPrice(Number(e.target.value))}
        />
      </div>
    </aside>
  );
}
