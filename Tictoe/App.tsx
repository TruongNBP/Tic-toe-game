import React, { useState, useEffect } from 'react';
import { Pressable } from 'react-native';

const App = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (row, col) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[row][col] = 'X';
      return newBoard;
    });
  };

  return (
    <div>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};
export default App;

const Board = ({ board, handleClick }) => {
  const rows = board.map((row, i) => (
    <div key={i}>
      {row.map((cell, j) => (
        <Button key={j} text={cell} onClick={() => handleClick(i, j)} />
      ))}
    </div>
  ));

  return (
    <div>
      {rows}
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <Pressable onClick={onClick}>
      {text}
    </Pr>
  );
};