import React from 'react'
import Stepper from './Steeper';
const HomePop = ({setPop}) => {
  let type = "popup-container"
  let sype = "popups-container"
  return (
    <div className='home-pop'>
        <i onClick={() => setPop(false)} className="fa-solid fa-xmark"></i>
        <div className={type}>
        <Stepper/>
        </div>
         
    </div>
  )
}

export default HomePop