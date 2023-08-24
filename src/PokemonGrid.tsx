// 修改后宝可梦列表列数根据浏览器页面宽度更改
// 之前为每个宝可梦发起了一个独立的API请求，这可能导致请求频繁，从而降低加载性能，修改后使用一个批量请求来获取多个宝可梦的数据，从而减少网络请求次数
// 每个pokemon格子单独请求
import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { fetchPokemonById } from './apis/api'
import { getPokemonBackgroundColor } from './pokemonUtils'
import { Box, Link, Image, Text, Grid, GridItem } from '@chakra-ui/react'

interface PokemonGridItemProps {
  pokemonId: number
}

const PokemonGridItem: React.FC<PokemonGridItemProps> =
  function PokemonGridItem({ pokemonId }) {
    const [pokemon, setPokemon] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchPokemonById(pokemonId)
          setPokemon(data)
          setIsLoading(false)
        } catch (error) {
          console.log('Error fetching Pokemon:', error)
        }
      }

      fetchData()
    }, [pokemonId])

    return (
      <Box
        p="4"
        rounded="lg"
        shadow="md"
        bg={
          isLoading
            ? 'gray.300'
            : getPokemonBackgroundColor(pokemon?.types[0].type.name)
        }
        h="164px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Link
            as={RouterLink}
            to={`/pokemon/${pokemon?.id}`}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src={pokemon?.sprites.front_default}
              alt={pokemon?.name}
              w="96px"
              h="96px"
            />
            <Text mb="3">{pokemon?.name}</Text>
          </Link>
        )}
      </Box>
    )
  }

interface PokemonGridProps {
  currentPage: number
  itemsPerPage: number
}

const PokemonGrid: React.FC<PokemonGridProps> = function PokemonGrid({
  currentPage,
  itemsPerPage
}) {
  const minPokemonPerRow = 3
  const maxPokemonPerRow = 9
  const [pokemonPerRow, setPokemonPerRow] = useState(maxPokemonPerRow)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      const availableColumns = Math.floor(windowWidth / 150)
      const adjustedColumns = Math.max(
        minPokemonPerRow,
        Math.min(maxPokemonPerRow, availableColumns)
      )
      setPokemonPerRow(adjustedColumns)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage + 1
  const endIndex = startIndex + itemsPerPage - 1
  const pokemonIds = []

  for (let i = startIndex; i <= endIndex && i <= 898; i += 1) {
    pokemonIds.push(i)
  }

  return (
    <Grid templateColumns={`repeat(${pokemonPerRow}, 1fr)`} gap={4}>
      {pokemonIds.map((pokemonId) => (
        <GridItem key={pokemonId}>
          <PokemonGridItem pokemonId={pokemonId} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default PokemonGrid
