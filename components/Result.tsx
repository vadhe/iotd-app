import { Box, Input, Text } from '@chakra-ui/react'
import * as React from 'react'
import Card from './Card'
import CardExample from './CardExample'

const Result: React.FC = () => {
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
        h="auto"
      >
        <Text pt={6} fontSize="4xl" as="h1" color="#fff" textAlign="center" fontFamily="Monoton, cursive">
          IOTD-APPS
        </Text>
        <Input my={6} textAlign="center" borderRadius="full" placeholder="Cari Idiom Yang Anda Inginkan" />
        <Box mt={6}>
          <Text textAlign="center">POUND OF FLESH</Text>
          <Card
            label="Definisi"
            bg="#dd477e"
            content="Something which is owed that is required to be paid back; a lawful but unnecessary repayment."
          />
          <Card
            label="Etimologi"
            bg="#dd477e"
            content="The idiom derives from Shakespeare’s ‘Merchant of Venice.’ In the play, Bassanio asks his merchant friend Antonio for a loan, so that he can pursue a wealthy Portia."
          />
          <Card label="Pemakaian" bg="#dd477e" content="As part of a sentence." />
          <CardExample
            examples={[
              ' I told you not to come in without knocking! You scared the living daylights out of me just then!',
              ' I tell you, the spider scared the living daylights out of me when I was in the bathroom, mainly because of how fast it was moving... towards me.'
            ]}
            label="Contoh: "
            bg="#dd477e"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Result
