import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'

const TestCart = () => {
    const data = useSelector(argStore=>argStore)
  return (
    <>
    <h2>The total number of items in the care is {data.cartCount}</h2>
    <TestItem/>
    </>
  )
}

export default TestCart