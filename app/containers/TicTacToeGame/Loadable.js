/**
 *
 * Asynchronously loads the component for TicTacToeGame
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
