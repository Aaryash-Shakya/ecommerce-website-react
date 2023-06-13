import React from 'react'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import IncrementDecrement from '../hooks/IncrementDecrement'
import Effect from '../hooks/Effect'
import Datafetch from '../components/Datafetch'

const HomePage = () => {
  return (
    <>
        <Carousel/>
        <Cards/>
        {/* <IncrementDecrement/>
        <Effect/> */}
        <Datafetch/>
    </>
  )
}

export default HomePage