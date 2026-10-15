# Iara Games — Loja (React)

Área **Loja** da plataforma Iara Games, desenvolvida em **React**. Catálogo com os 22 jogos da plataforma (jogos feitos por brasileiros ou ambientados no Brasil), com busca, filtros, ordenação, favoritos, detalhes do jogo e carrinho de compras.

## Funcionalidades

- **Busca** por nome, ignorando acentos (ex.: "aviao" encontra "Aviãozinho do Tráfico")
- **Filtro por gênero** (seleção múltipla) e **filtro por preço máximo**
- **Ordenação**: relevância, melhor avaliados, menor/maior preço, nome A-Z/Z-A
- **Favoritos** (coração no card) e visualização somente dos favoritos
- **Detalhes do jogo** em janela modal (fecha com Esc)
- **Carrinho** lateral com quantidade, remoção, total e esvaziar
- **Persistência** do carrinho e dos favoritos no `localStorage`
- Layout **responsivo** e acessível (rótulos, `aria-*`, foco visível, `prefers-reduced-motion`)

## Estrutura de pastas

```
iara-loja/
├── index.html
├── package.json
├── vite.config.js
├── public/images/          # capas dos jogos e logo
└── src/
    ├── main.jsx            # ponto de entrada
    ├── App.jsx             # estado da busca/filtros/ordenação
    ├── components/         # Header, SearchBar, SortSelect, FilterPanel,
    │                       # GameCard, GameGrid, GameModal, CartDrawer, Footer
    ├── context/            # CartContext (carrinho + favoritos)
    ├── data/games.js       # catálogo de jogos
    ├── utils/              # format.js, useLocalStorage.js (hook)
    └── styles/global.css
```
