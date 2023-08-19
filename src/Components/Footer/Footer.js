import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Footer/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "vGrFacebookOptionisible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Get Inspired
                </h3>
                <p>Don't Miss Out On The Perfect Gift - Sign Up Now! </p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate="true"
                  _lpchecked={1}
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Sign Up
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  />
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Android App</a>
                  </li>
                  <li>
                    <a href="#">ios App</a>
                  </li>
                  <li>
                    <a href="#">Desktop</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">My tasks</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; conditions</a>
                  </li>
                  <li>
                    <a href="#">Reporting</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Company Solutions
                </h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one" />
          <div className="footer_bg_two" />
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
