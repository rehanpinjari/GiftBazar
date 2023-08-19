import React from "react";
import CTA from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/CTA.svg";
import "../../App.css";
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="main_cta">
      <img className="main_image" src={CTA} />
      <div className="main">
        <h1 className="main_headline">Happiness is a gift</h1>
        <p className="main_p">
          Show your love with one of our large & small gift sets, uniquely
          created to bring happiness to someone you care about!
        </p>
        <div className="main_buttons">
          <Link to="/comingsoon">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            Buy Now
          </button>{" "}
          </Link>
          <Link to="/comingsoon">
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Check for Gift Sets
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
