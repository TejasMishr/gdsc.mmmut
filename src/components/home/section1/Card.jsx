import React from 'react'
import './Card.css'
function Card() {
  return (
    <div>
      <div className="main">
        <div className="card1 card">
          <img src="image1/1left.svg" alt="image1" />
          <img src="image1/1right.svg" alt="image1" />
        </div>
        <div className="card2 card">
          <img src="image1/2right.svg" alt="image1" />
        <img src="image1/2left.svg" alt="image1" />
        </div>
        <div className="card3 card">
        <img src="image1/3left.svg" alt="image1" />
          <img src="image1/3right.svg" alt="image1" />
        </div>
        <div className="card4 card">
          <img src="image1/4right.svg" alt="image1" />
        <img src="image1/4left.svg" alt="image1" />
        
        </div> 
      
      </div>
    </div>
  )
}

export default Card
