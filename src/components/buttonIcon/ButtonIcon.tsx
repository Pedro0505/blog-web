import React, { ReactNode } from 'react';
import IButton from '../../interface/components/IButton';
import './style.css';

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
