import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Label from '@/components/Label'

interface typeCard {
  content: string
  bg: string
  label?: string
}
const Card: React.FC<typeCard> = ({ content, bg, label }) => {
  return (
    <Box>
      <Label label={label} />
      <Box bg={bg} borderRadius="lg" p={4} mt={2}>
        [X] {content}
      </Box>
    </Box>
  )
}

export default Card
