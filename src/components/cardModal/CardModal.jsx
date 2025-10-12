import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardModal.css";
import { MdClose } from "react-icons/md";

function CardModal({ setOpenCardModal }) {
  const [addProdactCount, setAddProdactCount] = useState(0);

  return (
    <>
      <div className="cardModalPage">
        <div className="cardModal">
          <div className="cardModalLeft">
            <img
              src="https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/396924-smartphones-apple-iphone-xr-10001358.png"
              alt=""
            />
          </div>

          <button
            className="closeCardModal"
            onClick={() => {
              setOpenCardModal(false);
            }}
          >
            <MdClose />
          </button>

          <div className="cardModalRight">
            <h2>Стеклянные</h2>
            <span>₽ 500</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
            <div className="butBtn">
              

              <div className="addProdats">
                <button className="minusCard"
                  onClick={() => {
                    if (addProdactCount > 0) {
                      setAddProdactCount(addProdactCount - 1);
                    }
                  }}
                >
                  -
                </button>

                <h1 className="countCard">{addProdactCount}</h1>

                <button className="plassCard"
                  onClick={() => {
                    setAddProdactCount(addProdactCount + 1);
                  }}
                >
                  +
                </button>
              </div>

              <button className="addToCardBtn" >Add to cart</button>
            </div>
            <Link to={"/oneProdact"} >See More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardModal;
