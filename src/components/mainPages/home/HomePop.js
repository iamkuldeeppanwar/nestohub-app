import React from 'react'
import Stepper from './Steeper';
const HomePop = ({setPop}) => {
  return (
    <div className='home-pop'>
        <i onClick={() => setPop(false)} class="fa-solid fa-xmark"></i>
        <div className="popup-container">
        <Stepper/>
        </div>
         
    </div>
  )
}

export default HomePop