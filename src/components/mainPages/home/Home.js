import React,{useRef} from "react";
import growBusiness from '../../../images/growbusiness.jpg';
import nesto from '../../../images/nest.mp4';
import post from '../../../images/post.png';
const Home = () => {
  
  const videoRef = useRef();

  const handlePlay = () =>{
     videoRef.current.play();
  }

  const handlePause = () =>{
     videoRef.current.pause();
  }
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
              <h2>Save Time <br /> <span style={{visibility:'hidden'}}>hi</span> </h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Elevate Your <br /> Marketing</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card-box">
            <div className="card-box-1">
                <img src={growBusiness} alt="" />
            </div>
            <div className="card-box-2">
              <h2>Empover Your <br /> Development</h2>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
         
          </div>
    
      </div>

      <div className="quote">
        <div className="quote-icon">
        <i class="fa-solid fa-quote-left left-quo"></i>
        </div>
        <div className="quote-head">
         <span>Compass exists to make agents more successful. We work for our agents, not the other way around.</span>
         </div>
         <div className="quote-icon">
         <i class="fa-solid fa-quote-right right-quo"></i>
        </div>
        <div className="quote-para">
            <p className="first-p">Robert Reffkin</p>
            <p className="second-p">COMPASS FOUNDER & CEO</p>
        </div>
      </div>


      <div className="see-how">
      <div className="agent-secret">
        <div className="agent">
         <h2>See How Compass Agent</h2>
         <h2>Bea Citron Achieved 2x</h2>
         <h2>Increased Production</h2>
        </div>
        <div className="agent-1">
           <p>Learn how the platform streamlines her team’s</p>
           <p>transaction management, optimizes their</p>
           <p>activities, and saves them time on marketing—</p>
           <p>all so Bea can spend more time with her family.</p>
        </div>
        </div>

        <div className="video-player">
        <div className="vid-btn">
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            </div>
            <video ref={videoRef} poster={post}  className="video" src={nesto}   > 
            </video>
          </div>
          <div className="connect-btn">
              <button> <span>Connect to Learn More</span>  <i className="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>
     {/* ===========================customer section=================== */}
      <div className="our-customer">
      <div className="customer-1">
          <h2>What our agents are <br /> saying</h2>
           <div className="custom-btn">
              <button>Read More Agent Stories <i className="fa-solid fa-arrow-right"></i></button>
           </div>
          </div>
      </div>
    </>
  );
};

export default Home;
