import React from 'react';
import PokemonGrid from '../components/PokemonGrid';
import '../tailwind.css'

const HomePage: React.FC = () => {
  return (
    <div className="p-4  bg-gradient-to-r from-green-200 to-yellow-100">
      <PokemonGrid />
    </div>
  );
};

export default HomePage;
