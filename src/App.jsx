import { useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

export default function App() {
  const boardSize = 10;

  const emptyBoard = Array(boardSize)
    .fill(null)
    .map(() => {
      return Array(boardSize)
        .fill(null)
        .map(() => ({
          value: null,
        }));
    });

  const [board, setBoard] = useState(emptyBoard);
  const [step, setStep] = useState("x");

  const handleCellClick = (i, j) => {
    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));

    if (newBoard[i][j].value === null) {
      newBoard[i][j].value = step;
      setBoard(newBoard);

      setStep(step === "x" ? "o" : "x");
    }

    console.log(newBoard);
  };

  return (
    <div id="board-container" className={`step-${step}`}>
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              value={cell.value}
              onClick={handleCellClick}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
