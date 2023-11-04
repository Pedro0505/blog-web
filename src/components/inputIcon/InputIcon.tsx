import React, { ReactNode } from 'react';
import './style.css';
import IInput from '../../interface/components/IInput';
import ErrorCard from '../errorCard/ErrorCard';

interface InputIconProps extends IInput {
  icon?: ReactNode;
}

function InputIcon({ id, name, onChange, placeholder, icon, type = 'text', error, className, value }: InputIconProps) {
  return (
    <>
      <label htmlFor={id} className={`input-icon-label ${className}`}>
        {icon}
        <input
          className="input-icon"
          type={type}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
      <ErrorCard message={error || ''} />
    </>
  );
}

export default InputIcon;
