import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`mx-2 px-4 py-2 rounded-lg ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gradient-to-r from-blue-200 to-purple-200'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
