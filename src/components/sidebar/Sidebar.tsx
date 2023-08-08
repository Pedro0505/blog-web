import React, { ReactNode } from 'react';
import './style.css';

interface MySidebarProps {
  children: ReactNode;
  className?: string;
}

function Sidebar({ children, className = '' }: MySidebarProps) {
  return <aside className={`side-bar-conteiner ${className}`}>{children}</aside>;
}

export default Sidebar;
