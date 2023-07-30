import React, { ReactNode } from 'react';
import './style.css';
import IButton from '../../interface/components/IButton';

interface ButtonIconProps extends IButton {
  icon?: ReactNode;
}

function ButtonIcon({ name, onClick, type = 'button', icon, style }: ButtonIconProps) {
  return (
    <button type={type} className="button-icon" onClick={onClick} style={style}>
      {name}
      {icon}
    </button>
  );
}

export default ButtonIcon;
