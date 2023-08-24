import React, { useState } from 'react'
import PokemonGrid from '../PokemonGrid'
import Pagination from '../components/Pagination'
import { Box } from '@chakra-ui/react'

const HomePage: React.FC = function HomePage() {
  const itemsPerPage = 45
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(898 / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Box p={4} bgGradient="linear(to-r, green.200, yellow.100)">
      <PokemonGrid currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Box>
  )
}

export default HomePage
