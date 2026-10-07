/**
 * Catálogo da Loja Iara Games.
 *
 * Nomes, preços e imagens vêm do site HTML do projeto.
 * Gêneros dos 5 jogos com página própria vêm das tags dessas páginas;
 * os demais gêneros, as notas (%) de jogos sem página própria e os selos
 * "novo"/"essencial" e os textos de descrição são DADOS DE EXEMPLO (revisar antes de publicar).
 */
export const games = [
  { id: 1, nome: "Hell Clock", preco: 100.0, imagem: "image-hellclock.jpg", generos: ["RPG", "Ação", "Roguelike"], nota: 80.83, selo: "essencial", descricao: "Um RPG de ação hack and slash estilizado, ambientado na Guerra de Canudos, com builds, muito loot e combate sobrenatural." },
  { id: 2, nome: "9 Kings", preco: 39.99, imagem: "image-9kings.jpg", generos: ["Estratégia", "Roguelike"], nota: 90.77, selo: "essencial", descricao: "Roguelike de estratégia com cartas e montagem de decks, onde você disputa o trono contra nove reis." },
  { id: 3, nome: "Sky Dust", preco: 46.99, imagem: "image-sky-dust.jpg", generos: ["Ação", "Metroidvania"], nota: 85.0, selo: "novo", descricao: "Metroidvania cyberpunk com combate hack and slash e exploração de uma metrópole futurista." },
  { id: 4, nome: "Aviãozinho do Tráfico", preco: 10.5, imagem: "image-aviaozinho.jpg", generos: ["Aventura"], nota: 70.0, selo: null, descricao: "Aventura bem-humorada com referências à cultura popular brasileira." },
  { id: 5, nome: "Horizon Chase Turbo", preco: 32.15, imagem: "image-horizon-chase.jpg", generos: ["Corrida"], nota: 88.0, selo: "essencial", descricao: "Corrida arcade inspirada nos clássicos dos anos 80 e 90, com trilha sonora marcante." },
  { id: 6, nome: "A.I.L.A", preco: 79.95, imagem: "image-aila.jpg", generos: ["Terror"], nota: 82.0, selo: null, descricao: "Terror psicológico em primeira pessoa, com tensão constante e atmosfera sufocante." },
  { id: 7, nome: "Unsighted", preco: 54.9, imagem: "image-unsighted.jpg", generos: ["Ação", "Metroidvania"], nota: 86.0, selo: null, descricao: "Aventura de ação com autômatos em um mundo em decadência, contando com o tempo de cada personagem." },
  { id: 8, nome: "Two Strikes", preco: 44.9, imagem: "image-two-strikes.jpg", generos: ["Ação"], nota: 78.0, selo: "novo", descricao: "Ação de duelos rápidos em que um único golpe decide a luta." },
  { id: 9, nome: "Sludge Life", preco: 49.9, imagem: "image-sludge-life.jpg", generos: ["Aventura"], nota: 76.0, selo: null, descricao: "Exploração livre em uma ilha industrial, com grafites e atmosfera urbana." },
  { id: 10, nome: "Onikura", preco: 39.9, imagem: "image-onikura.jpg", generos: ["Ação"], nota: 74.0, selo: "novo", descricao: "Ação estilizada de inspiração oriental, com combate fluido e visual marcante." },
  { id: 11, nome: "Mullet MadJack", preco: 59.9, imagem: "image-mullet-madjack.jpg", generos: ["Tiro", "Ação"], nota: 87.0, selo: null, descricao: "Tiro frenético em primeira pessoa, em que você luta contra o relógio." },
  { id: 12, nome: "Moonleap", preco: 34.9, imagem: "image-moonleap.jpg", generos: ["Plataformas", "Puzzle"], nota: 79.0, selo: null, descricao: "Plataforma cooperativa com quebra-cabeças e personagens fofos." },
  { id: 13, nome: "Lead the Dragon", preco: 42.9, imagem: "image-lead-the-dragon.jpg", generos: ["Corrida", "Ação"], nota: 72.0, selo: null, descricao: "Corrida com perseguições estilosas e ação nas ruas." },
  { id: 14, nome: "Investigação Póstuma", preco: 36.9, imagem: "image-investigacao-postuma.jpg", generos: ["Mistério"], nota: 75.0, selo: null, descricao: "Mistério investigativo em que cada pista muda a leitura do caso." },
  { id: 15, nome: "Fobia", preco: 41.9, imagem: "image-fobia.jpg", generos: ["Terror"], nota: 85.0, selo: null, descricao: "Terror de sobrevivência ambientado em um hotel, com muita tensão." },
  { id: 16, nome: "Enigma do Medo", preco: 69.9, imagem: "image-enigma-do-medo.jpg", generos: ["Mistério", "Aventura"], nota: 93.71, selo: "essencial", descricao: "Aventura de mistério e investigação sobrenatural, com detetives e segredos de família." },
  { id: 17, nome: "Dandara", preco: 38.9, imagem: "image-dandara.jpg", generos: ["Metroidvania", "Plataformas", "Ação"], nota: 77.26, selo: null, descricao: "Metroidvania indie em que você se move pelas paredes, tetos e chão em um mundo de sal." },
  { id: 18, nome: "Cordels & Spells", preco: 46.9, imagem: "image-cordels-spells.jpg", generos: ["RPG", "Aventura"], nota: 81.0, selo: "novo", descricao: "RPG com magias inspiradas na literatura de cordel e no folclore nordestino." },
  { id: 19, nome: "Bloodless", preco: 57.9, imagem: "image-bloodless.jpg", generos: ["Estratégia", "Ação"], nota: 80.0, selo: null, descricao: "Combate tático com um visual estilizado e muita personalidade." },
  { id: 20, nome: "Asleep", preco: 31.9, imagem: "image-asleep.png", generos: ["Terror", "Aventura"], nota: 73.0, selo: null, descricao: "Aventura de terror em episódios, com exploração e clima sombrio." },
  { id: 21, nome: "Zueirama 2", preco: 22.9, imagem: "image-zueirama-2.jpg", generos: ["Plataformas"], nota: 68.0, selo: null, descricao: "Plataforma cheia de humor e referências da internet brasileira." },
  { id: 22, nome: "99 Vidas", preco: 27.9, imagem: "image-99-vidas.jpg", generos: ["Ação"], nota: 71.0, selo: null, descricao: "Ação em estilo beat 'em up, com cooperação e muita pancadaria." },
];

export const allGenres = [...new Set(games.flatMap((g) => g.generos))].sort((a, b) =>
  a.localeCompare(b, "pt-BR")
);

export const sortOptions = [
  { value: "relevancia", label: "Relevância" },
  { value: "nota", label: "Melhor avaliados" },
  { value: "preco-menor", label: "Menor preço" },
  { value: "preco-maior", label: "Maior preço" },
  { value: "nome-az", label: "Nome (A-Z)" },
  { value: "nome-za", label: "Nome (Z-A)" },
];
