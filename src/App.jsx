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
    console.log(i, j);

    setBoard(board.map((row, rowIndex) => {
      if (rowIndex === i) {
        return row.map((cell, cellIndex) => {
          if (cellIndex === j && cell.value === null) {
            return {value: step};
          } else {
            return cell;
          }
        })
      } else {
        return row;
      }
    }))

    setStep(step === "x" ? "o" : "x");
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
