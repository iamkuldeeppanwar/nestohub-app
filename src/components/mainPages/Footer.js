import React from 'react'
import logo from '../../images/logo.png';
import twit from '../../images/twit.png';
import insta from '../../images/insta.png';
import youTube from '../../images/youTube.png';
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.png';
import home3 from '../../images/home3.png';
const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className='first-foot'>
            <div className="logo-footer">
                <img src={logo} alt="loko" />
            </div>
            <div className="first-para">
                <p> Dream Home is a gated community  </p>
                <p>with a great location. Located</p>
                <p>downtown, you’re within walking </p>
                <p>distance of Parks, and the...<span>View More</span></p>
            </div>
        </div>
        <div className='second-foot'>
           <div className="foot-header">
              <h2>Contact Us</h2>
           </div>
           <div className="second-para">
              <p className='par'>Lorem ipsum, in graphical and textual <br />
Context, refers to filler text that</p>
<div className="another-second">
<p>+91 5586XXXXXXXX</p>
<p className='another-sec-first'>Sample.Nesto@gmail.com</p>
</div>
           </div>
        </div>
        <div className='third-foot'>
            <div className="foot-header">
                <h2>Follow Us</h2>
            </div>
            <div className="social-links">
                <span className='first'><img src={insta} alt="" /></span>
                <span className='second'><img src={youTube} alt="" /></span>
                <span className='third'><img src={twit} alt="" /></span>
            </div>
            <div className="input-era">
               <select name="" id="">
                  <option value="">English-En</option>
               </select>
            </div>
        </div>
        <div className='fourth-foot'>
             <div className="fourth-foot-first">
                <img className='first-ima' src={home1} alt="" />
                <img className='second-ima' src={home2} alt="" />
                <img className='third-ima' src={home3} alt="" />
             </div>
             <div className="fourth-foot-first v-link">
                <img className='first-ima' src={home1} alt="" />
                <img className='second-ima' src={home2} alt="" />
                <img className='third-ima' src={home3} alt="" />
             </div>
        </div>
      </div>
      <hr className='foot-hr' />
      <div className="bottom-para">
        <p>© 2022 Dandelion | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer