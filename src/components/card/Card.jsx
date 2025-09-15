import React from 'react'
import "./Card.css"

function Card() {
  return (
    <>
        <div className="card">
            <div className="cardImg">
                <img src="/imgs/card1.png" alt="" />
            </div>
            <div className="cardInfo">
                <h3>Стеклянные</h3>
            </div>
        </div>
    </>
  )
}

export default Card