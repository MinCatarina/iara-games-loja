# Iara Games — Loja (React)

Área **Loja** da plataforma Iara Games, desenvolvida em **React + Vite**. Catálogo com os 22 jogos da plataforma (jogos feitos por brasileiros ou ambientados no Brasil), com busca, filtros, ordenação, favoritos, detalhes do jogo e carrinho de compras.

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

## Conceitos de React utilizados

`useState`, `useMemo`, `useEffect`, Context API (`createContext`/`useContext`), hook customizado (`useLocalStorage`), renderização de listas com `key`, renderização condicional e composição de componentes com props.

## Como rodar localmente

Requer [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/ para hospedagem
```

## Hospedagem

**Vercel** (recomendado): em vercel.com, "Add New → Project", importe este repositório e clique em Deploy (o Vite é detectado automaticamente).

**Netlify**: "Add new site → Import an existing project", comando de build `npm run build` e pasta de publicação `dist`.

Como o `vite.config.js` usa `base: "./"`, o build também funciona em subpastas (ex.: GitHub Pages).

## Observação sobre os dados

Nomes, preços e imagens vêm do site HTML do projeto. Os gêneros (exceto os dos 5 jogos com página própria), as notas dos jogos sem página própria, os selos "Novo/Essencial" e os textos de descrição são **dados de exemplo** para demonstrar os filtros.
