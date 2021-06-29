import { Box, Input, Text } from '@chakra-ui/react'
import * as React from 'react'

const UnResult: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(
            178deg
            , #201831eb, #201831bd)"
      py={{ md: '2rem' }}
    >
      <Box
        my={{ md: '7' }}
        borderRadius={{ md: 'xl' }}
        mx="auto"
        w={{ md: '50%', lg: '30%' }}
        pb={6}
        px={3}
        color="#fff"
        fontFamily="Roboto Mono, monospace"
        bg="custom.black"
        h="100vh"
      >
        <Text pt={6} fontSize="4xl" as="h1" color="#fff" textAlign="center" fontFamily="Monoton, cursive">
          IOTD-APPS
        </Text>
        <Input my={6} textAlign="center" borderRadius="full" placeholder="Cari Idiom Yang Anda Inginkan" />
        <Box bg="#dd477e" borderRadius="lg" p={4} mt={2}>
          <Text>Hasil ...</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default UnResult
