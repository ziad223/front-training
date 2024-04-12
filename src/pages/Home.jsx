import React from 'react'
import Header from '../components/header/Header'
import NewArrivals from '../components/newArrival/NewArrivals'

const Home = ({addToCart}) => {
  return (
    <div>
      <Header/>
      <NewArrivals addToCart = {addToCart}/>
    </div>
  )
}

export default Home
