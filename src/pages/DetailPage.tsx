import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPokemonById } from '../apis/api'
import { getPokemonBackgroundColor } from '../pokemonUtils'
import { Box, Text, UnorderedList, ListItem, Flex } from '@chakra-ui/react'

//const pokemonInfoBox = 'rounded-xl shadow-lg p-2 my-2 px-4'

const PokemonAbility: React.FC<{ abilities: any[] }> = function PokemonAbility({
  abilities
}) {
  return (
    <Box bg="black" rounded="xl" shadow="lg" p={2} my={2} px={4}>
      <Text fontSize="lg" color="white" fontWeight="semibold" mb={2}>
        Abilities:
      </Text>
      <UnorderedList>
        {abilities.map((ability: any) => (
          <ListItem color="white" key={ability.ability.name}>
            {ability.ability.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

const PokemonMove: React.FC<{ moves: any[] }> = function PokemonMove({
  moves
}) {
  return (
    <Box bg="gray.100" rounded="xl" shadow="lg" p={2} my={2} px={4}>
      <Text fontSize="lg" fontWeight="semibold" mb={2}>
        Move :
      </Text>
      <UnorderedList>
        {moves.slice(0, 4).map((move: any) => (
          <ListItem key={move.move.id}>{move.move.name}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

const PokemonStat: React.FC<{ stats: any[] }> = function PokemonStat({
  stats
}) {
  return (
    <Box bg="black" rounded="xl" shadow="lg" p={2} my={2} px={4}>
      <Text fontSize="lg" color="white" fontWeight="semibold" mb={2}>
        Stat :
      </Text>
      <UnorderedList>
        {stats.slice(0, 4).map((stat: any) => (
          <ListItem color="white" key={stat.stat.id}>
            {stat.stat.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

const PokemonDetails: React.FC<{ pokemon: any }> = function PokemonDetails({
  pokemon
}) {
  if (!pokemon) {
    return null
  }
  const {
    types,
    sprites,
    name,
    height,
    weight,
    order,
    abilities,
    moves,
    stats
  } = pokemon

  return (
    <Flex
      direction="column"
      align="center"
      bg={getPokemonBackgroundColor(types[0].type.name)}
      h="100vh"
      w="100vw"
    >
      <Box>
        <img
          src={sprites.other['official-artwork'].front_default}
          alt={name}
          width={475}
          height={475}
          className="mb-2"
        />
        <Text fontSize="2xl" fontWeight="bold" m={4}>
          Name: {name}
        </Text>
      </Box>
      <Flex flexDir="row">
        <Box bg="gray.100" rounded="xl" shadow="lg" p={2} my={2} mr={4} px={4}>
          <p>
            Type:
            {types[0].type.name}
          </p>
        </Box>
        <Box bg="black" rounded="xl" shadow="lg" p={2} my={2} mr={4} px={4}>
          <p className="text-white">
            Height:
            {height / 10}m
          </p>
        </Box>
        <Box bg="gray.100" rounded="xl" shadow="lg" p={2} my={2} mr={4} px={4}>
          <p>
            Weight:
            {weight / 10} kg
          </p>
        </Box>
        <Box bg="black" rounded="xl" shadow="lg" p={2} my={2} mr={4} px={4}>
          <p className="text-white">
            Order:
            {order}
          </p>
        </Box>
      </Flex>
      <Flex direction="row">
        <PokemonAbility abilities={abilities} />
        <Box ml={4}>
          <PokemonMove moves={moves} />
        </Box>
        <Box ml={4}>
          <PokemonStat stats={stats} />
        </Box>
      </Flex>
    </Flex>
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
    <Flex flexDir="column" alignItems="center">
      <PokemonDetails pokemon={pokemon} />
    </Flex>
  )
}

export default DetailPage
