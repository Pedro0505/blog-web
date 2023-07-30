import React from 'react';
import IInput from '../../interface/components/IInput';
import './style.css';

function InputLabel({ id, name, onChange, type = 'text', labelText }: IInput) {
  return (
    <label htmlFor={id} className="input-label">
      <p className="input-label-text">{labelText}</p>
      <input className="input-label-field" type={type} name={name} id={id} onChange={onChange} />
    </label>
  );
}

export default InputLabel;
