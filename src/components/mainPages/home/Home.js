import React from "react";
import growBusiness from '../../../images/growbusiness.jpg';
const Home = () => {
  return (
    <>
      <div className="welcome">
        <div className="wlcome-home">
          <h2>Welcome Back.</h2>
          <p>Growing your business is just a click away</p>
          <div className="homi-btn">
            <button>
              <span>Let's Chat</span>{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="transform">
        <h2>Transform Your Business with Compass</h2>
        <div className="card">
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Grow Your <br /> Business</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Grow Your <br /> Business</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Save <br /> Time</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Grow Your <br /> Business</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
