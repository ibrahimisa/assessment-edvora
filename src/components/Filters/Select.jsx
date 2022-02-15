import React from 'react';

function Select({ options, name, value, changeHandler, ...rest }) {
  return (
    <select {...rest} name={name} value={value} onChange={changeHandler}>
      <option value={name}>{name}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Select;
