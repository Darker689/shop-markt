import React from 'react'
// Components
import MainCarusel from '../components/MainCarusel'
import Smartphones from '../components/Smartphones'
import Categories from '../components/Categories'
import Laptop from '../components/Laptop'
import KreditCart from '../components/KreditCart'

const Home = () => {
  return (
    <>
      <MainCarusel />
      <Smartphones />
      <Categories />
      <Laptop />
      <KreditCart />
    </>
  )
}

export default Home