/**
 *
 * Board
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Square from '../Square/index';
import './style.css';


function Board(props) {
  return (
    <div className="board">
      {
                props.board.map((row, y) => (
                    row.map((square, x) => (
                      <Square
                        player={square}
                        onSquareClicked={() => props.onSquareClicked(x, y)}
                      />
                    ))
                ))
            }
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Board;
