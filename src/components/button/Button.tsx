import React, { ReactNode } from 'react';
import './style.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

function Button({ children, style, onClick = () => {}, type = 'button', className, disabled = false }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={'button ' + (className !== undefined ? className : '')}
      type={type}
      onClick={onClick}
      style={style}>
      {children}
    </button>
  );
}

export default Button;
