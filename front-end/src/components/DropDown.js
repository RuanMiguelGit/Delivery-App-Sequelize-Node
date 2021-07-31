/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DropDown({ selectClass, value, change, state}) {
  const [loading, setLoading] = useState(false);

  return (

    <select className={selectClass}
     value={value}
     onChange={ (e) => change(e.target.value) }
     >
   {loading ? <p>Carregando</p>: state.filter(item => item.role ==='seller')
   .map(item => {
     return <option value={ item.name }> {item.name}  </option>
   })}

   {console.log('state', state.map(item => item.name ))}
 </select>
  );
}

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
};
