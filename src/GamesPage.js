import React from 'react';
import GamesList from './GamesList';
import { connect } from 'react-redux';

export class GamesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList games={this.props.games} />
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

GamesPage = connect(mapStateToProps)(GamesPage);

export default GamesPage;