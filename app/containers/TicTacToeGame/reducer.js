/*
 *
 * TicTacToeGame reducer
 *
 */

import { fromJS } from 'immutable';
import {
    SQUARE_CLICKED,
} from './constants';

const initialState = fromJS({
  player: 'X',
  board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
  ],
  tieGame: false,
  winner: false,
});

function reduceGameWon(state) {
    // Row win?
  const rowWin = state.get('board').some(
            (row) => (
            row.every(
                    (square) => square === state.get('player')
            )
        )
    );

  if (rowWin) {
    return state.set('winner', state.get('player'));
  }

    // Column win?
  const transposed = state.getIn(['board', 0]).map(
        (_, iCol) => state.get('board').map(
            (row) => row.get(iCol)
        )
    );  // https://rosettacode.org/wiki/Matrix_transposition#ES6

  const colWin = transposed.some(
            (row) => (
            row.every(
                    (square) => square === state.get('player')
            )
        )
    );
  if (colWin) {
    return state.set('winner', state.get('player'));
  }

    // Diagonal win?
  const fwdDiagonals = state.getIn(['board', 0]).reduce(
        (acc, _, col) => acc.push(state.getIn(['board', col, col])),
        fromJS([])
    );
  const bwdDiagonals = state.getIn(['board', 0]).reduce(
        (acc, _, col) => acc.push(state.getIn(['board', col, (state.get('board').size - 1) - col])),
        fromJS([])
    );

  const diagWin = fwdDiagonals.every(
                (square) => square === state.get('player')
        ) || bwdDiagonals.every(
                (square) => square === state.get('player')
        );
  if (diagWin) {
    return state.set('winner', state.get('player'));
  }

    // Tie?
  const tie = state.get('board').every(
        (row) => row.every(
            (square) => square !== ''
        )
    );

  if (tie) {
    return state.set('tieGame', true);
  }

  return state;
}

function reduceSquareClicked(state, payload) {
    // Set the square
  let newState = state.setIn(['board', payload.y, payload.x], state.get('player'));

    // Check for wins
  newState = reduceGameWon(newState);

    // Advance the player
  newState = newState.set('player', state.get('player') === 'X' ? 'O' : 'X');

  return newState;
}

function ticTacToeGameReducer(state = initialState, action) {
  switch (action.type) {
    case SQUARE_CLICKED:
      return reduceSquareClicked(state, action.payload);
    default:
      return state;
  }
}

export default ticTacToeGameReducer;
