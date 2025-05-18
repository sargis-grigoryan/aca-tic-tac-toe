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
  const [isX,setIsX] = useState(true)


  const handleCellClick = (i, j) => {
    board[i][j].value = isX ? "x" : "o"
    setBoard([...board])
    setIsX((prev) => !prev)

  };

  return (
    <div id="board-container" className={`step-${isX  ? "x" : "o"}`}>
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
