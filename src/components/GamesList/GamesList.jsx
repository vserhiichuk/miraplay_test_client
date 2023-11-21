import React from 'react';
import './GamesList.scss'

const GamesList = ({ gamesData }) => (
  <div className="games__list">
    {gamesData.map((game) => (
      <div key={game._id} className="games__item">
        <img src={game.gameImage} alt={game.commonGameName} className="games__image" />
        <div className="games__info">
          <h2 className="games__name">{game.commonGameName}</h2>
          <p className="games__description">
            {game.gameDescription.length > 20
              ? `${game.gameDescription.substring(0, 150)}...`
              : game.gameDescription}
          </p>
          <p className="games__genre">{game.genre}</p>
        </div>
      </div>
    ))}
  </div>
);

export default GamesList;
