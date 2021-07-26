/* eslint-disable */
import React from 'react';

export default function Button({ testId, name, type, btnclass, disable, onClick }) {
  return (
    <button
      type="button"
      className={ btnclass }
      disabled={ disable }
      onClick={ onClick }
      data-testid={ testId }
    >
      {' '}
      {name}
      {' '}
    </button>
  );
  Button.propTypes = {
    name: PropTypes.string.isRequired,
    btnclass: PropTypes.string.isRequired,
    disable: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,

  };
}
