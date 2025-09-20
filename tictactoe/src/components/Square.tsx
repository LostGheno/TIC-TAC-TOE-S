import { type SquareProps } from "../types";


const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      className="w-16 h-16 bg-white border-2 border-gray-400 text-2xl font-bold text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-150"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
