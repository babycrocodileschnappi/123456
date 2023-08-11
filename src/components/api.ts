import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchRandomPokemon = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon/${Math.floor(Math.random() * 898) + 1}`);
  return response.data;
};

export const fetchPokemonById = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
};
