/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function DropDown({ name, selectClass }) {
  return (
 <select className={selectClass}>
     <option> {name}</option>
 </select>
  );
}

DropDown.propTypes = {
  name: PropTypes.bool.isRequired,
};
