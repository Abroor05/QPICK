import React, { useState } from "react";
import "./OneProdact.css";

function OneProdact() {
  const [addToCardsCount, setAddToCardCount] = useState(0);

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
              <h2 className="brandName">Стеклянные</h2>
              <p className="brendPrice">₽ 500</p>

              <p className="brendDescription" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur modi, accusantium voluptatem possimus dolores tempore fugiat quidem dolorem nisi.</p>
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
                  <button
                    onClick={() => {
                      if (addToCardsCount > 0) {
                        setAddToCardCount(addToCardsCount - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <h2 className="CountAdd">{addToCardsCount}</h2>
                  <button
                    onClick={() => {
                      setAddToCardCount(addToCardsCount + 1);
                    }}
                  >
                    +
                  </button>
                </div>

               
              </div>
               <div className="buyBtns">
                <button className="addToCardBtn">Add to card</button>
                <button className="buyNowBtn">Buy now</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneProdact;
