import { useState } from 'react';
import './App.css';
import Cell from './components/Cell';
import { generateInitialBoard, getNewStateWithWinningCells } from './service';

export default function App() {
	const boardSize = 10;

	const [board, setBoard] = useState(() => generateInitialBoard(boardSize));
	const [step, setStep] = useState('x');
	const [isWin, setIsWin] = useState(false);
	const winningCount = 5;

	const handleCellClick = (i, j) => {
		if (isWin || board[i][j].value !== null) {
			return;
		}

		const newBoard = [...board];

		newBoard[i] = [...newBoard[i]];
		newBoard[i][j] = { ...newBoard[i][j], value: step };

		const { board: newBoardWithWinnings, hasWinning } =
			getNewStateWithWinningCells(newBoard, step, winningCount, i, j);

		setBoard(newBoardWithWinnings);
		setIsWin(hasWinning);
		setStep(step === 'x' ? 'o' : 'x');
	};

	return (
		<div id='board-container' className={`step-${step}`}>
			{board.map((row, rowIndex) => (
				<div className='row' key={rowIndex}>
					{row.map((cell, cellIndex) => (
						<Cell
							key={cellIndex}
							value={cell.value}
							onClick={handleCellClick}
							rowIndex={rowIndex}
							cellIndex={cellIndex}
							isWinning={cell.isWinning}
						/>
					))}
				</div>
			))}
		</div>
	);
}
