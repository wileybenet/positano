import React from 'react';

import './Input.css';

let idCounter = 1;

const kebab = str => str.replace(/[^A-Za-z0-9\s]/g, '').replace(/\s/g, '-').toLowerCase();

const Component = ({ name, placeholder, value = '$$infer', checked, type, onChange, maxLength, error, formName = '' }) => {
  const id = `form-input-${idCounter++}`;
  const label = (
    <label htmlFor={id}>{name}</label>
  );
  const props = {
    type,
    id,
    value,
    checked,
    onChange,
    placeholder,
    maxLength,
    name: kebab(formName),
  };
  return (
    <div className="form-group">
      {type === 'text' && label}
      <input {...props} className={error && 'has-error'} />
      {(type === 'checkbox' || type === 'radio') && label}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Component;
