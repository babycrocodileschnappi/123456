import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './components/AppRouter'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
)
