import React from 'react'
// Components
import MainCarusel from '../components/MainCarusel'
import Smartphones from '../components/Smartphones'
import Categories from '../components/Categories'
import Laptop from '../components/Laptop'

const Home = () => {
  return (
    <>
      <MainCarusel />
      <Smartphones />
      <Categories />
      <Laptop />
    </>
  )
}

export default Home