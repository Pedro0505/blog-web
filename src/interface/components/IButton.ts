import React from 'react';

interface IButton {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  style?: React.CSSProperties;
}

export default IButton;
