export default function SearchBar({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="busca" className="sr-only">Buscar jogos pelo nome</label>
      <input
        id="busca"
        type="search"
        className="input"
        placeholder="Buscar jogos pelo nome..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
