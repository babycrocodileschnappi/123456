// 修改了响应式布局
import React, { Key } from 'react'
import { Button } from '@chakra-ui/react'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = function funcName({
  totalPages,
  currentPage,
  onPageChange
}) {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index as Key}
          type="submit"
          mx={2}
          my={1}
          px={4}
          py={2}
          rounded="lg"
          bgGradient={
            currentPage === index + 1
              ? 'linear(to-r, orange.200, pink.200)'
              : 'linear(to-r, blue.200, purple.200)'
          }
          color={currentPage === index + 1 ? 'white' : undefined}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  )
}

export default Pagination
