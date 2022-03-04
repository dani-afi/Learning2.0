import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatdani.css";

const Whatdani = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient-text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-cotainer">
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default Whatdani;
