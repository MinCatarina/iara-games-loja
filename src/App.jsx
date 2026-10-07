import { useMemo, useState } from "react";
import { games } from "./data/games";
import { normalize } from "./utils/format";
import { useCart } from "./context/CartContext";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import FilterPanel from "./components/FilterPanel";
import GameGrid from "./components/GameGrid";
import GameModal from "./components/GameModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

const PRICE_LIMIT = Math.ceil(Math.max(...games.map((g) => g.preco)));

const sorters = {
  relevancia: () => 0,
  nota: (a, b) => b.nota - a.nota,
  "preco-menor": (a, b) => a.preco - b.preco,
  "preco-maior": (a, b) => b.preco - a.preco,
  "nome-az": (a, b) => a.nome.localeCompare(b.nome, "pt-BR"),
  "nome-za": (a, b) => b.nome.localeCompare(a.nome, "pt-BR"),
};

export default function App() {
  const { favorites } = useCart();

  const [query, setQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [maxPrice, setMaxPrice] = useState(PRICE_LIMIT);
  const [sort, setSort] = useState("relevancia");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const visibleGames = useMemo(() => {
    const term = normalize(query.trim());
    return games
      .filter((g) => normalize(g.nome).includes(term))
      .filter((g) => genres.length === 0 || g.generos.some((x) => genres.includes(x)))
      .filter((g) => g.preco <= maxPrice)
      .filter((g) => !onlyFavorites || favorites.includes(g.id))
      .sort(sorters[sort]);
  }, [query, genres, maxPrice, sort, onlyFavorites, favorites]);

  const toggleGenre = (g) =>
    setGenres((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  const clearAll = () => {
    setQuery("");
    setGenres([]);
    setMaxPrice(PRICE_LIMIT);
    setSort("relevancia");
    setOnlyFavorites(false);
  };

  return (
    <>
      <Header
        onOpenCart={() => setCartOpen(true)}
        onToggleFavorites={() => setOnlyFavorites((v) => !v)}
        showingFavorites={onlyFavorites}
      />

      <main className="container main">
        <section className="intro">
          <h1>{onlyFavorites ? "Seus favoritos" : "Todos os jogos"}</h1>
          <p>Jogos desenvolvidos por brasileiros ou ambientados no Brasil.</p>
        </section>

        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} />
          <SortSelect value={sort} onChange={setSort} />
        </div>

        <div className="layout">
          <FilterPanel
            selectedGenres={genres}
            onToggleGenre={toggleGenre}
            maxPrice={maxPrice}
            priceLimit={PRICE_LIMIT}
            onMaxPrice={setMaxPrice}
            onClear={clearAll}
          />

          <section aria-live="polite">
            <p className="count">
              {visibleGames.length} {visibleGames.length === 1 ? "jogo encontrado" : "jogos encontrados"}
            </p>
            <GameGrid games={visibleGames} onOpen={setSelectedGame} onClear={clearAll} />
          </section>
        </div>
      </main>

      <Footer />

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
