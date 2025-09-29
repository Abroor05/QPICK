import React from "react";
import Card from "../../components/card/Card";
import "./Home.css";
import NCard from "../../components/nCard/NCard";
import Add from "../../components/add/Add";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">

        <div className="adSection">
           <Add/> 
        </div>

          <div className="chexol">
            <h2>Cases</h2>
            <div className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="headphones">
            <h2>headphones</h2>
              <div className="cards">
                <NCard/>
                <NCard/>
                <NCard/>
                <NCard/>
                <NCard/>
                <NCard/>
                <NCard/>
                <NCard/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
