import React from 'react';
import './style.css';
import Button from '../button/Button';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  pageRange: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({ totalPages, currentPage, onPageChange, pageRange }: PaginationProps) {
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
      <Button
        disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(1);
        }}>
        Primeira
      </Button>
      {pagesToShow.map(page => (
        <Button
          key={page}
          disabled={currentPage === page}
          className={'button-pagination' + (page === currentPage ? ' active' : '')}
          onClick={() => {
            onPageChange(page);
          }}>
          {page}
        </Button>
      ))}
      <Button
        disabled={currentPage === totalPages}
        onClick={() => {
          handlePageChange(totalPages);
        }}>
        Última
      </Button>
    </div>
  );
}

export default Pagination;
