/**
*
* GameState
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function GameState(props) {
  if (props.winner !== false) {
    return (
      <div className="game_state">
        {props.winner} Wins!
      </div>
    );
  }

  if (props.tie_game === true) {
    return (
      <div className="game_state">
        Tie Game
      </div>
    );
  }

  return (
    <div className="game_state">
      Current Player: {props.player}
    </div>
  );
}

GameState.propTypes = {
  player: PropTypes.oneOf(['X', 'O']),
  winner: PropTypes.oneOf(['X', 'O', false]),
  tie_game: PropTypes.bool,
};

export default GameState;
