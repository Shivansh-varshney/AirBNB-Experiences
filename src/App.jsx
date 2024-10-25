import React from 'react'
import Nav from './components/Navbar'
import HeroSection from './components/Hero'
import Card from './components/Card'
import cardData from './data'
import './App.css'

function App() {

  const cardElements = cardData.map(data => <Card 
    img={data.coverImg}
    price={data.price}
    rating={data.stats.rating}
    reviewCount={data.stats.reviewCount}
    location={data.location}
    title={data.title}
    openSpots={data.openSpots}
  />)

  return (
    <>
      <Nav />
      <HeroSection />
      <div id='card-elements'>
      {cardElements}
      </div>
    </>
  )
}

export default App
