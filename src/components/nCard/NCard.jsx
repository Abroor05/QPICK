import React from "react";
import "./NCard.css";
import { IoMdStar } from "react-icons/io";

function NCard() {
  return (
    <>
      <div className="NCards">
        <div className="nCardImg">
          <img src="/imgs/naushnik1.png" alt="" />
        </div>

        <div className="nCardInfo">
          <div className="nCardInfoTop">
            <span className="name">
              <h2>Apple BYZ S852I</h2>
            </span>

            <span className="prices">
              <h4>2927 ₸</h4>
              <h5>
                <del>3527 ₸</del>
              </h5>
            </span>
          </div>
          <div className="nCardInfoBottom">
            <div className="stars">
              <span>
                <IoMdStar />
              </span>

              <span>4.7</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NCard;
