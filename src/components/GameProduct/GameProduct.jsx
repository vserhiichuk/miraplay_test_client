import React from 'react';
import './GameProduct.scss';

const GameItem = ({ game }) => (
  <div className="game">
    <img src={game.gameImage} alt={game.commonGameName} className="game__image" />
    <div className="game__info">
      <h2 className="game__name">{game.commonGameName}</h2>
      <p className="game__description">
        {game.gameDescription.length > 20
          ? `${game.gameDescription.substring(0, 150)}...`
          : game.gameDescription}
      </p>
      <p className="game__genre">{game.genre}</p>
    </div>
  </div>
);

export default GameItem;