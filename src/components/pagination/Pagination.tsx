import React from 'react';
import Button from './button/Button';
import './style.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const pageRange = 2;
  const pagesToShow: number[] = [];

  for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
    if (i > 0 && i <= totalPages) {
      pagesToShow.push(i);
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(1);
        }}>
        Primeira
      </button>
      {pagesToShow.map(page => (
        <Button
          currentPage={currentPage}
          key={page}
          onPageChange={() => {
            handlePageChange(page);
          }}
          page={page}
          value={page}
        />
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => {
          handlePageChange(totalPages);
        }}>
        Última
      </button>
    </div>
  );
}

export default Pagination;
