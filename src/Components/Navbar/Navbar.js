import React from "react";
import "../../App.css";
import GiftBazar from "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Assets/GiftBazar.png";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav-dark className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            Sign In
          </button>
          <form className="dropdown-menu p-4">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              New around here?{" "}
              <a className="sign-up" href="#home">
                {" "}
                Sign up{" "}
              </a>
            </a>
            <a className="dropdown-item" href="#">
              Forgot password?
            </a>
          </form>
        </div>
        <a className="navbar-brand" href="#">
          <img src={GiftBazar} alt="Bootstrap" width={130} />
        </a>
        <Link to="/comingsoon"> 
        <a className="category active">
          About
        </a>
       </Link> 
        <Link to="/comingsoon">
        <a className="category">
          Home
        </a>
        </Link>
        <Link to="/comingsoon">
        <a className="category">
          Gifts
        </a>
        </Link>
      </div>
    </nav-dark>
  );
};
