import React, { ReactNode } from 'react';
import './style.css';

interface MySidebarCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function SidebarCard({ children, className = '', style }: MySidebarCardProps) {
  return (
    <span style={style} className={`side-bar-card-conteiner ${className}`}>
      {children}
    </span>
  );
}

export default SidebarCard;
