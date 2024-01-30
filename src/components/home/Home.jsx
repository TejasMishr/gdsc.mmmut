import React from 'react'
import Hero from './Hero/Hero'
import { Footer, Navbar } from '../common'
import Card from './section1/Card'
import AnimatedCursor from 'react-animated-cursor'
export const Home = () => {
  return (
    <div>
       <AnimatedCursor
         trailingSpeed={2}
  innerSize={8}
  outerSize={30}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid #ea4235'
  }}
/>
<AnimatedCursor
  trailingSpeed={4}
  innerSize={8}
  outerSize={40}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid #4286f5'
  }}
/>
<AnimatedCursor
 trailingSpeed={6}
  innerSize={8}
  outerSize={50}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
 
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid #109d58'
  }}
/>
<AnimatedCursor
 trailingSpeed={10}
  innerSize={8}
  outerSize={60}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}

  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid #fabd03'
  }}
/>
      <Navbar />
      <Hero />
      <Card/>
      <Footer />
    </div>
  )
}
