import React from 'react';
import './style.css';

interface ButtonProps {
  value: number;
  onPageChange: (newPage: number) => void;
  page: number;
  currentPage: number;
}

function Button({ onPageChange, value, page, currentPage }: ButtonProps) {
  return (
    <button
      className={'button-pagination ' + (page === currentPage ? 'active' : '')}
      onClick={() => {
        onPageChange(page);
      }}>
      {value}
    </button>
  );
}

export default Button;
