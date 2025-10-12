import React, { useState } from "react";
import "./Card.css";
import { LuEye } from "react-icons/lu";
import CardModal from "../cardModal/CardModal";

function Card() {
  const [openCardModal, setOpenCardModal] = useState(false);

  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src="/imgs/card1.png" alt="" />
        </div>
        <div className="cardInfo">
          <h3>Стеклянные</h3>
        </div>

        <span
          onClick={() => {
            setOpenCardModal(true);
          }}
          className="eyeBtn"
        >
          <LuEye />
        </span>
      </div>

      {openCardModal ? <CardModal setOpenCardModal={setOpenCardModal} /> : ""}
    </>
  );
}

export default Card;
