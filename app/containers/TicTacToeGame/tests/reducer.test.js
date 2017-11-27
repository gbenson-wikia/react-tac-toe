
import { fromJS } from 'immutable';
import ticTacToeGameReducer from '../reducer';

describe('ticTacToeGameReducer', () => {
  it('returns the initial state', () => {
    expect(ticTacToeGameReducer(undefined, {})).toEqual(fromJS({}));
  });
});
