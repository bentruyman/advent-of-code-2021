export function part1(input: string) {
  const { draws, boards } = parseInput(input);

  for (const draw of draws) {
    for (const board of boards) {
      board.mark(draw);
      if (board.hasWon()) {
        return sumUnmarked(board) * draw;
      }
    }
  }
}

export function part2(input: string) {
  const { draws, boards } = parseInput(input);

  for (const draw of draws) {
    for (const board of boards) {
      board.mark(draw);
      if (board.hasWon()) {
        if (boards.size === 1) {
          return sumUnmarked(board) * draw;
        } else {
          boards.delete(board);
        }
      }
    }
  }
}

export function parseInput(input: string): {
  draws: number[];
  boards: Set<Board>;
} {
  const chunks = input.split("\n\n");
  const draws = chunks[0].split(",").map((n) => parseInt(n));
  const boards: Board[] = chunks.slice(1).map((chunk) => new Board(chunk));

  return {
    draws,
    boards: new Set(boards),
  };
}

class Board {
  marks: boolean[][];
  grid: number[][];

  constructor(board: string) {
    this.grid = board
      .split("\n")
      .map((row) => row.trim())
      .map((row) => row.split(/\s+/).map((n) => parseInt(n)));

    this.marks = this.grid.map((row) => new Array(row.length).fill(false));
  }

  hasWon(): boolean {
    return (
      this.marks.some((row) => !row.includes(false)) ||
      transpose(this.marks).some((row) => !row.includes(false))
    );
  }

  mark(num: number): void {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === num) {
          this.marks[rowIndex][colIndex] = true;
        }
      });
    });
  }
}

function sumUnmarked(board: Board): number {
  let sum = 0;

  board.marks.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === false) sum += board.grid[rowIndex][colIndex];
    });
  });

  return sum;
}

const transpose = <T>(list: T[][]): T[][] =>
  list[0].map((_, colIndex) => list.map((row) => row[colIndex]));
