import React from 'react';

export const InputComponent = ({
  label,
  type = 'text',
  placeholder = '',
  name,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        autoComplete='off'
      />
      {type === 'range' && <span>{value}</span>}
    </div>
  );
};
