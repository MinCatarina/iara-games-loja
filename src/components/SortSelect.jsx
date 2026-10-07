import { sortOptions } from "../data/games";

export default function SortSelect({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="ordenar" className="sr-only">Ordenar por</label>
      <select id="ordenar" className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        {sortOptions.map((o) => (
          <option key={o.value} value={o.value}>
            Ordenar por: {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
