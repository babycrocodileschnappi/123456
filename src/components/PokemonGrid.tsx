import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { fetchPokemonById } from './api';
import '../tailwind.css';

const PokemonGrid: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const itemsPerPage = 45; // 5 rows * 9 columns
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPokemonPage = async () => {
      const list = [];
      const startIndex = (currentPage - 1) * itemsPerPage + 1;
      const endIndex = startIndex + itemsPerPage - 1;

      for (let i = startIndex; i <= endIndex && i <= 898; i++) {
        const data = await fetchPokemonById(i);
        list.push(data);
      }

      setPokemonList(list);
    };

    fetchPokemonPage();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const typeColors: { [key: string]: string } = {
    fire: 'bg-red-300',
    grass: 'bg-green-300',
    electric: 'bg-yellow-300',
    water: 'bg-blue-300',
    ground: 'bg-yellow-200',
    rock: 'bg-yellow-200',
    fairy: 'bg-purple-200',
    poison: 'bg-purple-300',
    bug: 'bg-green-400',
    dragon: 'bg-indigo-300',
    psychic: 'bg-pink-200',
    flying: 'bg-blue-200',
    fighting: 'bg-red-200',
    normal: 'bg-gray-200',
    ghost: 'bg-indigo-300',
    steel: 'bg-gray-300',
    ice: 'bg-blue-100',
    dark: 'bg-brown-300',
  };

  const getPokemonBackgroundColor = (type: string) => {
    console.log('Type:', type);
    if (type && type.length > 0) {
      const color = typeColors[type];
      console.log('Color:', color);

      return color || 'bg-gray-300'; // 默认灰色背景
    }
    return 'bg-gray-300'; // 默认灰色背景
  };

  return (
    <div>
      <div className="grid grid-cols-9 gap-4">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className={`flex flex-col items-center ${getPokemonBackgroundColor(pokemon.types[0].type.name)} rounded-lg shadow-md pd-4`}
          >
            <Link to={`/pokemon/${pokemon.id}`} className="flex flex-col items-center">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-22 h-22" />
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
