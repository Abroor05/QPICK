import React from 'react'
import './OneProdact.css'

function OneProdact() {
  return (
    <>
      <div className="oneProdactPage">
        <div className="container">
            <div className="oneProdactAll">
                <div className="oneProdactImg">

                    <div className="arrImgs">
                        <div className="arrImg">
                            <img src="/imgs/naushnik1.png" alt="" />
                        </div>
                        <div className="arrImg">
                            <img src="/imgs/naushnik1.png" alt="" />
                        </div>
                        <div className="arrImg">
                            <img src="/imgs/naushnik1.png" alt="" />
                        </div>
                        <div className="arrImg">
                            <img src="/imgs/naushnik1.png" alt="" />
                        </div>
                    </div>

                    <div className="mainImg">
                        <img src="/imgs/card1.png" alt="" />
                    </div>
                </div>

                <div className="oneProdactInfo">
                    <h2>Стеклянные</h2>
                    <span>₽ 500</span>
                    <div className="colors">
                        <div className="color1">
                            <span></span>
                        </div>
                        <div className="color2">
                            <span></span>
                        </div>
                        <div className="color3">
                            <span></span>
                        </div>
                        <div className="color4">
                            <span></span>
                        </div>
                    </div>

                    <div className="addToCards">
                        <div className="countControl">
                            <button>-</button>
                            <h2>0</h2>
                            <button>+</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default OneProdact
