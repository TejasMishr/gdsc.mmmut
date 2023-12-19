import React from 'react'
import Hero from './Hero/Hero'
import { Footer, Navbar } from '../common'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
