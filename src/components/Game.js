import React, {useState} from "react";
import {calculateWinner} from '../helpers';
import Board from './Board';

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {

const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);
const winner = calculateWinner(board);

  const handleClick = i => {
    const boardCopy = [...board]
    //if user clicks on occupied square or there is a winner, return
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'x' : 'o';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);

  }

  const jumpTo = () => {

  }

  const renderMoves = () => {
    return <button onClick={() => setBoard(Array(9).fill(null))}>
    Start Game
    </button>
  }
  return (
    <>
    <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p>{winner ? 'Winner: ' + winner: 'Next Player: ' + (xIsNext ? 'x' : 'o')}</p>
        {renderMoves()}
      </div>
    </>
  )
}

export default Game;
