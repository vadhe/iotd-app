import * as React from 'react'
import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import Label from '@/components/Label'

interface typeCardExample {
  examples: string[]
  bg: string
  label: string
}
const CardExample: React.FC<typeCardExample> = ({ examples, bg, label }) => {
  return (
    <Box>
      <Label label={label} />
      <Box bg={bg} borderRadius="lg" p={4} mt={2}>
        <UnorderedList>
          {examples.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}

export default CardExample
