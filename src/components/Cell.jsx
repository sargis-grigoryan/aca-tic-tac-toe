export default function Cell({
  value,
  onClick,
  rowIndex,
  cellIndex,
  isWinning,
}) {
  return (
    <div
      className={`cell ${value ?? ""} ${isWinning ? "win" : ""}`}
      onClick={() => onClick(rowIndex, cellIndex)}
    ></div>
  );
}
