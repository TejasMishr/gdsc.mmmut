import React from 'react'
import Hero from './Hero/Hero'
import { Footer, Navbar } from '../common'
import Card from './section1/Card'
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card/>
      <Footer />
    </div>
  )
}
