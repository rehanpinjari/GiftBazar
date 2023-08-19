import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Feature/Feature.css";
import { Link } from 'react-router-dom';


export const Feature = () => {
  return (
    <div className="feature px-4 py-5" id="featured-3">
      <h2 className="feature-headline pb-2">Thoughtful gifting made easy!</h2>
      <p className="feature-p">
        We are here to take care of the heavy gifing for you.
      </p>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="feature-1 fs-2">Plants & Flowers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consequuntur quasi quidem, beatae praesentium quam.
          </p>
        <Link to="/comingsoon"> 
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Check it out!
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </Link>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#people-circle" />
            </svg>
          </div>
          <h3 className="feature-2 fs-2">Gift Sets</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repellendus consequuntur voluptatibus tenetur nisi ea.
          </p>
          <Link to="/comingsoon">
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Check it out!
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </Link>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <h3 className="feature-3 fs-2">Home With Kids</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            accusantium libero earum minus, nesciunt voluptas?
          </p>
          <Link to="/comingsoon">
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Check it out!
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
