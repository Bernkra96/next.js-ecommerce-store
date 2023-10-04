'use client';

export default function NumSector({ value, onChange }) {
  return (
    <div>
      <form>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <h4> [select] </h4>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
        </select>
      </form>
    </div>
  );
}
