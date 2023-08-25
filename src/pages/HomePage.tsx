import React from 'react'
import PokemonGrid from '../PokemonGrid'
import Pagination from '../components/Pagination'
import { Box } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

const HomePage: React.FC = function HomePage() {
  const itemsPerPage = 45
  const navigate = useNavigate()
  const { page } = useParams<{ page?: string }>() // 获取动态参数 page
  const currentPage = page ? parseInt(page) : 1 // 转换为数字
  const totalPages = Math.ceil(898 / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    const newPath = `/${newPage}` // 生成新的路由路径
    navigate(newPath) // 导航到新的路径
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
