import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/giftbazar/src/Components/Achievements/Achievements.css"; // Import the CSS file from the same directory

const Achievements = () => {
  return (
    <section className="module bg-gray p-b-0">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="counter">
            <div className="counter-icon">
              <span className="icon-energy icons" />
            </div>
            <div className="counter-number">
              <h6>
                <strong
                  className="counter-timer"
                  data-from={0}
                  data-to={3000}
                >
                  3,000+
                </strong>
              </h6>
            </div>
            <div className="counter-title">Sets Sold</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter">
            <div className="counter-icon">
              <span className="icon-game-controller icons" />
            </div>
            <div className="counter-number">
              <h6>
                <strong
                  className="counter-timer"
                  data-from={0}
                  data-to={5000}
                >
                  5,000+
                </strong>
              </h6>
            </div>
            <div className="counter-title">Gift Sold</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter">
            <div className="counter-icon">
              <span className="icon-fire icons" />
            </div>
            <div className="counter-number">
              <h6>
                <strong
                  className="counter-timer"
                  data-from={0}
                  data-to={7000}
                >
                  7,000+
                </strong>
              </h6>
            </div>
            <div className="counter-title">Happy Clients</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="counter">
            <div className="counter-icon">
              <span className="icon-diamond icons" />
            </div>
            <div className="counter-number">
              <h6>
                <strong className="counter-timer" data-from={0} data-to={25}>
                  25+
                </strong>
              </h6>
            </div>
            <div className="counter-title">Years Of EXperience</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Achievements;
