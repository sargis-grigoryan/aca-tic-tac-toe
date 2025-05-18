export default function Cell({ value, onClick, rowIndex, cellIndex }) {
  return (
    <div
      className={`cell ${value ?? ""}`}
      onClick={() => onClick(rowIndex, cellIndex)}
    ></div>
  );
}
