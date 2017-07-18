import React from 'react';

export const GamesList = ({ games }) => {
  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  );

  const gamesList = () => {
    return (
      games.map((item) => {
        return <li key={item.key}>{item.name}</li>;
      })
    );
  }

  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList()}
    </div>
  );
}

GamesList.propTypes = {
  games: React.PropTypes.array.isRequired
}

export default GamesList;