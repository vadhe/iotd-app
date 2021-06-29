import * as React from 'react'
import Result from '@/components/Result'
import UnResult from '@/components/UnResult'

const Home: React.FC = () => {
  const data = true
  if (!data) {
    return (
      <>
        <UnResult />
      </>
    )
  }
  return <Result />
}

export default Home
