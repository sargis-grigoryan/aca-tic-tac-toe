import { useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

export default function App() {
  const boardSize = 10;

  // const emptyBoard = Array(boardSize)
  //   .fill(null)
  //   .map(() => {
  //     return Array(boardSize)
  //       .fill(null)
  //       .map(() => ({
  //         value: null,
  //       }));
  //   });

  const emptyBoard = [
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: "x",
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: "o",
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
    [
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
      {
        value: null,
      },
    ],
  ];

  const [board, setBoard] = useState(emptyBoard);
  const [step, setStep] = useState("x");

  const handleCellClick = (i, j) => {
    console.log(i, j);

    if (board[i][j].value) return;

    const updatedBoard = board.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (rowIndex === i && colIndex === j) {
          return { ...cell, value: step };
        }
        return cell;
      })
    );
    setBoard(updatedBoard);
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
