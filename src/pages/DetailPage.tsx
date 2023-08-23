import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchPokemonById } from '../apis/api'
import { getPokemonBackgroundColor } from '../pokemonUtils'

const pokemonInfoBox = 'rounded-xl shadow-lg p-2 my-2 px-4'

const PokemonAbility: React.FC<{ abilities: any[] }> = function PokemonAbility({
  abilities
}) {
  return (
    <div className={`bg-black ${pokemonInfoBox}`}>
      <h3 className="text-lg text-white font-semibold mb-2">Abilities:</h3>
      <ul>
        {abilities.map((ability: any) => (
          <li className="text-white" key={ability.ability.name}>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const PokemonMove: React.FC<{ moves: any[] }> = function PokemonMove({
  moves
}) {
  return (
    <div className={`bg-gray-100 ${pokemonInfoBox}`}>
      <h3 className="text-lg font-semibold mb-2">Move :</h3>
      <ul>
        {moves.slice(0, 4).map((move: any) => (
          <li key={move.move.id}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  )
}

const PokemonStat: React.FC<{ stats: any[] }> = function PokemonStat({
  stats
}) {
  return (
    <div className={`bg-black ${pokemonInfoBox}`}>
      <h3 className="text-lg text-white font-semibold mb-2">Stat :</h3>
      <ul>
        {stats.slice(0, 4).map((stat: any) => (
          <li className="text-white" key={stat.stat.id}>
            {stat.stat.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const PokemonDetails: React.FC<{ pokemon: any }> = function PokemonDetails({
  pokemon
}) {
  if (!pokemon) {
    return null // or render a loading indicator
  }
  const {
    types,
    sprites,
    name,
    height,
    weight,
    baseExperience,
    order,
    abilities,
    moves,
    stats
  } = pokemon

  return (
    <div
      className={`flex flex-col items-center ${getPokemonBackgroundColor(
        types[0].type.name
      )} rounded-lg shadow-md h-screen w-screen pd-4`}
    >
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width={475}
        height={475}
        className="mb-2"
      />
      <h2 className="text-2xl font-bold m-4">
        Name:
        {name}
      </h2>
      <div className="flex flex-row space-x-4">
        <div className={`bg-gray-100 ${pokemonInfoBox}`}>
          <p>
            Type:
            {types[0].type.name}
          </p>
        </div>
        <div className={`bg-black ${pokemonInfoBox}`}>
          <p className="text-white">
            Height:
            {height / 10}m
          </p>
        </div>
        <div className={`bg-gray-100 ${pokemonInfoBox}`}>
          <p>
            Weight:
            {weight / 10}
            kg
          </p>
        </div>
        <div className={`bg-black ${pokemonInfoBox}`}>
          <p className="text-white">
            Base experience:
            {baseExperience}
          </p>
        </div>
        <div className={`bg-gray-100 ${pokemonInfoBox}`}>
          <p>
            Order:
            {order}
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <PokemonAbility abilities={abilities} />
        <PokemonMove moves={moves} />
        <PokemonStat stats={stats} />
      </div>
    </div>
  )
}

const DetailPage: React.FC = function DetailPage() {
  const { id } = useParams<{ id?: string }>()
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    if (id) {
      const pokemonId = parseInt(id, 10)
      fetchPokemonById(pokemonId).then((data) => {
        setPokemon(data)
      })
    }
  }, [id])

  return (
    <div className="flex flex-col items-center pd-4">
      <PokemonDetails pokemon={pokemon} />
      <Link to="/" className="text-blue-500 hover:underline">
        Back to HomePage
      </Link>
    </div>
  )
}

export default DetailPage
