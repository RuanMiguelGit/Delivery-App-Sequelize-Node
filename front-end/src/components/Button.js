/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ testId, name, btnclass, disable, onClick }) {
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
}

Button.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  btnclass: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
