import React, { ReactNode } from 'react';
import './style.css';
import IInput from '../../interface/components/IInput';

interface InputIconProps extends IInput {
  icon?: ReactNode;
}

function InputIcon({ id, name, onChange, placeholder, icon, type = 'text' }: InputIconProps) {
  return (
    <>
      <label htmlFor={id} className="input-icon-label">
        {icon}
        <input className="input-icon" type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} />
      </label>
    </>
  );
}

export default InputIcon;
