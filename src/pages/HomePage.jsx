import React from 'react'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import IncrementDecrement from '../hooks/IncrementDecrement'

const HomePage = () => {
  return (
    <>
        <Carousel/>
        <Cards/>
        <IncrementDecrement/>
    </>
  )
}

export default HomePage