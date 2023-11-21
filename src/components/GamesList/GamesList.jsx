import React from 'react';
import GameItem from '../GameProduct/GameProduct';
import './GamesList.scss';

const GamesList = ({ gamesData }) => (
  <div className="games__list">
    {gamesData.map((game) => (
      <GameItem key={game._id} game={game} />
    ))}
  </div>
);

export default GamesList;