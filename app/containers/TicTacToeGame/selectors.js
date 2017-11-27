import { createSelector } from 'reselect';

/**
 * Direct selector to the ticTacToeGame state domain
 */
const selectTicTacToeGameDomain = (state) => state.get('ticTacToeGame');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TicTacToeGame
 */

const makeSelectTicTacToeGame = () => createSelector(
  selectTicTacToeGameDomain,
  (substate) => substate.toJS()
);

export default makeSelectTicTacToeGame;
export {
  selectTicTacToeGameDomain,
};
