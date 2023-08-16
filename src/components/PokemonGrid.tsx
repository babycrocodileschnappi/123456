//修改后宝可梦列表列数根据浏览器页面宽度更改
//之前为每个宝可梦发起了一个独立的API请求，这可能导致请求频繁，从而降低加载性能，修改后使用一个批量请求来获取多个宝可梦的数据，从而减少网络请求次数
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { fetchPokemonByIds } from './api';
import '../tailwind.css';
import {getPokemonBackgroundColor } from '../components/pokemonUtils';

const PokemonGrid: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const itemsPerPage = 45; 
  const minPokemonPerRow = 3;
  const maxPokemonPerRow = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerRow, setPokemonPerRow] = useState(maxPokemonPerRow);

  useEffect(() => {
    const fetchPokemonPage = async () => {
      const startIndex = (currentPage - 1) * itemsPerPage + 1;
      const endIndex = startIndex + itemsPerPage - 1;
      const pokemonIds = [];
      
      for (let i = startIndex; i <= endIndex && i <= 898; i++) {
        pokemonIds.push(i);
      }
      try {
        const batchData = await fetchPokemonByIds(pokemonIds);
        setPokemonList(batchData);
      } catch (error) {
        console.log('Error fetching Pokemon:', error);
      }
    };

    fetchPokemonPage();
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const availableColumns = Math.floor(windowWidth / 150); // Adjust the value based on your design
      const adjustedColumns = Math.max(minPokemonPerRow, Math.min(maxPokemonPerRow, availableColumns));
      setPokemonPerRow(adjustedColumns);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={`grid grid-cols-${pokemonPerRow} gap-4`}>
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className={`flex flex-col items-center ${getPokemonBackgroundColor(pokemon.types[0].type.name)} rounded-lg shadow-md p-4`}
          >
            <Link to={`/pokemon/${pokemon.id}`} className="flex flex-col items-center">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} width={96} height={96}  />
              <p className="mb-3">{pokemon.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <Pagination totalPages={Math.ceil(898 / itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default PokemonGrid;