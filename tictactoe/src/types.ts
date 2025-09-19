export type Player = 'X' | 'O' | null;

export type Board = Player[];

export interface SquareProps {
  value: Player;
  onSquareClick: () => void;
}

export interface BoardProps {
  xIsNext: boolean;
  squares: Board;
  onPlay: (nextSquares: Board) => void;
}

export interface GameState {
  history: Board[];
  currentMove: number;
}