/**
*
* Square
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.css';

function Square(props) {
  return (
    <button className="square" onClick={props.player === '' ? props.onSquareClicked : () => {}}>
      {props.player}
    </button>
  );
}

Square.propTypes = {
  player: PropTypes.oneOf(['X', 'O', '']),
  onSquareClicked: PropTypes.func,
};

export default Square;
