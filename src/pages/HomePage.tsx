import React, { useState } from 'react';
import PokemonGrid from '../PokemonGrid.tsx';
import Pagination from '../components/Pagination.tsx';

const HomePage: React.FC = () => {
  const itemsPerPage = 45;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(898 / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 bg-gradient-to-r from-green-200 to-yellow-100">
      <PokemonGrid currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
