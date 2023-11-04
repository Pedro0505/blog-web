import React from 'react';
import IInput from '../../interface/components/IInput';
import './style.css';
import ErrorCard from '../errorCard/ErrorCard';

function InputLabel({ id, name, onChange, type = 'text', labelText, error, value }: IInput) {
  return (
    <>
      <label htmlFor={id} className="input-label">
        <p className="input-label-text">{labelText}</p>
        <input className="input-label-field" type={type} name={name} id={id} onChange={onChange} value={value} />
      </label>
      <ErrorCard message={error || ''} />
    </>
  );
}

export default InputLabel;
