/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DropDown({ selectClass, value, change, state, testId }) {
  const [loading] = useState(false);

  return (

    <select
      data-testid={ testId }
      className={ selectClass }
      value={ value }
      onChange={ (e) => change(e.target.value) }
    >
      {loading ? <p>Carregando</p> : state.filter((item) => item.role === 'seller')
        .map((item) => (
          <option key={ item.id } value={ item.name }>
            {' '}
            {item.name}
            {' '}
          </option>))}

      {console.log('state', state.map((item) => item.name))}
    </select>
  );
}

DropDown.propTypes = {
  selectClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  state: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,

};
