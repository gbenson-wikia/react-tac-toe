/*
 *
 * TicTacToeGame actions
 *
 */

import {
  SQUARE_CLICKED,
} from './constants';

export function squareClicked(x, y) {
  return {
    type: SQUARE_CLICKED,
    payload: { x, y },
  };
}
