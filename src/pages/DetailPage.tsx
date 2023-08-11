import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPokemonById } from '../components/api';
import '../tailwind.css';


const DetailPage: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const pokemonId = parseInt(id, 10);
            fetchPokemonById(pokemonId).then((data) => {
                setPokemon(data);
            });
        }
    }, [id]);


    const typeColors: { [key: string]: string } = {
        fire: 'bg-red-300',
        grass: 'bg-green-200',
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
        <div className={`flex flex-col items-center pd-4`}>
            {pokemon && (
                <div className={`flex flex-col items-center ${getPokemonBackgroundColor(pokemon.types[0].type.name)} rounded-lg shadow-md h-screen w-screen pd-4`}>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="w-200 h-200 mb-2" />
                    <h2 className="text-2xl font-bold m-4">Name: {pokemon.name}</h2>
                    <div className="flex flex-row space-x-4">
                        <div className="bg-gray-100 rounded-xl shadow-lg p-2 my-2 px-4">
                            <p>Type: {pokemon.types[0].type.name}</p>
                        </div>
                        <div className="bg-black rounded-xl shadow-lg p-2 my-2 px-4">
                            <p className="text-white">Height: {pokemon.height / 10} m</p>
                        </div>
                        <div className="bg-gray-100 rounded-xl shadow-lg p-2 my-2 px-4">
                            <p>Weight: {pokemon.weight / 10} kg</p>
                        </div>
                        <div className="bg-black rounded-xl shadow-lg p-2 my-2 px-4">
                            <p className="text-white">Base experience: {pokemon.base_experience} </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl shadow-lg p-2 my-2 px-4">
                            <p>Order: {pokemon.order} </p>
                        </div>
                    </div>


                    <div className="flex flex-row space-x-4">
                        <div className="bg-black rounded-xl shadow-lg p-2 my-2 px-4">
                            <h3 className="text-lg text-white font-semibold mb-2">Abilities:</h3>
                            <ul>
                                {pokemon.abilities.map((ability: any) => (
                                    <li className="text-white" key={ability.ability.name}>{ability.ability.name}</li>
                                ))}
                            </ul>
                        </div>


                        <div className="bg-gray-100 rounded-xl shadow-lg p-2 my-2 px-4">
                            <h3 className="text-lg font-semibold mb-2">Move :</h3>
                            <ul>
                                {pokemon.moves.slice(0, 4).map((move: any) => (
                                    <li key={move.move.id}>{move.move.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black rounded-xl shadow-lg p-2 my-2 px-4">
                            <h3 className="text-lg text-white font-semibold mb-2">Stat :</h3>
                            <ul>
                                {pokemon.stats.slice(0, 4).map((stat: any) => (
                                    <li className="text-white" key={stat.stat.id}>{stat.stat.name}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    <Link to="/" className="text-blue-500 hover:underline">Back to HomePage</Link>
                </div>
            )}
        </div>
    );
};

export default DetailPage;
