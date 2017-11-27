/**
 *
 * TicTacToeGame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectTicTacToeGame from './selectors';
import reducer from './reducer';
import GameState from '../../components/GameState/index';
import Board from '../../components/Board/index';
import { squareClicked } from './actions';

export class TicTacToeGame extends React.Component {
  onSquareClicked = (squareX, squareY) => {
    if (this.props.tictactoegame.tie_game === true ||
            this.props.tictactoegame.winner !== false) {
      return;
    }

    this.props.dispatch(squareClicked(squareX, squareY));
  };

  render() {
    const { player, winner, tieGame, board } = this.props.tictactoegame;
    return (
      <div>
        <Helmet>
          <title>React-Tac-Toe</title>
          <meta name="description" content="React-Tac-Toe: a simple Tic-Tac-Toe game in React" />
        </Helmet>
        <GameState
          player={player}
          winner={winner}
          tie_game={tieGame}
        />
        <Board
          board={board}
          onSquareClicked={this.onSquareClicked}
        />
      </div>
    );
  }
}

TicTacToeGame.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tictactoegame: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tictactoegame: makeSelectTicTacToeGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ticTacToeGame', reducer });

export default compose(
    withReducer,
    withConnect,
)(TicTacToeGame);
