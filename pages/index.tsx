import { Box, Text, Heading, Input, Flex } from '@chakra-ui/react'
import Label from '@/components/Label'
import Card from '@/components/Card'
import CardExample from '@/components/CardExample'
import Result from '@/components/Result'
import UnResult from '@/components/UnResult'
// import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  const data = false
  if (!data) {
    return <UnResult />
  }
  return <Result />
}
