import * as React from 'react'
import { Text } from '@chakra-ui/react'

const Label: React.FC<{ label?: string }> = ({ label }) => {
  return <Text mt={4}>{label}</Text>
}

export default Label
