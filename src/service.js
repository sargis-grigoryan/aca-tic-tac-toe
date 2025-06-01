export function getNewStateWithWinningCells(
  board,
  step,
  winningCount,
  coord_i,
  coord_j
) {
  const size = board.length;
  const effectiveCellsCount = winningCount - 1;

  function getWinCellsForSlice(slice) {
    let winningCells = [];

    for (const cell of slice) {
      if (cell.value === step) {
        winningCells.push(cell);
      } else {
        if (winningCells.length >= winningCount) {
          return winningCells;
        } else {
          winningCells = [];
        }
      }
    }

    if (winningCells.length >= winningCount) {
      return winningCells;
    } else {
      return [];
    }
  }

  function getHorizontalSlice() {
    const startIndex =
      coord_j - effectiveCellsCount >= 0 ? coord_j - effectiveCellsCount : 0;

    const endIndex =
      coord_j + effectiveCellsCount < size
        ? coord_j + effectiveCellsCount
        : size - 1;

    return board[coord_i].slice(startIndex, endIndex + 1);
  }

  function getVerticalSlice() {
    const startIndex =
      coord_i - effectiveCellsCount >= 0 ? coord_i - effectiveCellsCount : 0;

    const endIndex =
      coord_i + effectiveCellsCount < size
        ? coord_i + effectiveCellsCount
        : size - 1;

    const verticalCells = [];

    for (let i = startIndex; i <= endIndex; i++) {
      verticalCells.push(board[i][coord_j]);
    }

    return verticalCells;
  }

  // getting diagonal cells from left to right

  function getDiagonalSlice_1() {
    const fromLeftToRight = [];

    for (
      let leftShiftCount = effectiveCellsCount;
      leftShiftCount > 0;
      leftShiftCount--
    ) {
      const i = coord_i - leftShiftCount;
      const j = coord_j - leftShiftCount;

      if (i >= 0 && j >= 0) {
        fromLeftToRight.push(board[i][j]);
      }
    }

    fromLeftToRight.push(board[coord_i][coord_j]);

    for (
      let rightShiftCount = 1;
      rightShiftCount <= effectiveCellsCount;
      rightShiftCount++
    ) {
      const i = coord_i + rightShiftCount;
      const j = coord_j + rightShiftCount;

      if (i < size && j < size) {
        fromLeftToRight.push(board[i][j]);
      }
    }

    return fromLeftToRight;
  }

  // getting diagonal cells from right to left

  function getDiagonalSlice_2() {
    const fromRightToLeft = [];

    for (
      let leftShiftCount = effectiveCellsCount;
      leftShiftCount > 0;
      leftShiftCount--
    ) {
      const i = coord_i + leftShiftCount;
      const j = coord_j - leftShiftCount;

      if (i < size && j >= 0) {
        fromRightToLeft.push(board[i][j]);
      }
    }

    fromRightToLeft.push(board[coord_i][coord_j]);

    for (
      let rightShiftCount = 1;
      rightShiftCount <= effectiveCellsCount;
      rightShiftCount++
    ) {
      const i = coord_i - rightShiftCount;
      const j = coord_j + rightShiftCount;

      if (i >= 0 && j < size) {
        fromRightToLeft.push(board[i][j]);
      }
    }

    return fromRightToLeft;
  }

  const horizontalWinningCells = getWinCellsForSlice(getHorizontalSlice());
  const verticalWinningCells = getWinCellsForSlice(getVerticalSlice());
  const diagonalWinningCells_1 = getWinCellsForSlice(getDiagonalSlice_1());
  const diagonalWinningCells_2 = getWinCellsForSlice(getDiagonalSlice_2());

  const allWinningCells = [].concat(
    horizontalWinningCells,
    verticalWinningCells,
    diagonalWinningCells_1,
    diagonalWinningCells_2
  );

  if (allWinningCells.length === 0) {
    return {
      board,
      hasWinning: false,
    };
  }

  const newBoard = board.map((row) => {
    return row.map((cell) => {
      if (allWinningCells.includes(cell)) {
        return {
          ...cell,
          isWinning: true,
        };
      }

      return cell;
    });
  });

  return {
    board: newBoard,
    hasWinning: true,
  };
}

export const generateInitialBoard = (boardSize) => {
  return Array(boardSize)
    .fill(null)
    .map(() => {
      return Array(boardSize)
        .fill(null)
        .map(() => ({
          value: null,
          isWinning: false,
        }));
    });
};
