import React,{useState} from 'react'
const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  const [navColor,setNavColor]=useState(false);

 
  
  // const nav = ({ isActive }) => {
  //     return {
  //         fontWeight: isActive ? 'bold' : 'normal',
  //         color: isActive ? 'rgb(9, 104, 247)' : '#ffffff',
  //         transition: isActive ? '0.8s' : '',
  //         backgroundColor: isActive ? 'black' : 'transparent',
  //         padding: isActive ? '5px' : '0px',
  //         opacity: isActive ? '0.8' : '1',
  //         borderRadius: isActive ? '2px' : '0px',
  //         overflow:'hidden'
  //     }
  // }

  // const navContact = ({ isActive }) => {
  //     return {
  //         backgroundColor: isActive ? 'black' : '#0e66f9',
  //         opacity: isActive ? '0.8' : '1',
  //         transition: isActive ? '0.8s' : '',
  //         color: isActive ? 'rgb(9, 104, 247)' : '#ffffff',
  //         fontWeight: isActive ? 'bold' : 'normal',
  //         overflow:'hidden'
  //     }
  // }

  const changeNavColor =()=>{
      if(window.scrollY >= 20){
          setNavColor(true)
      }
      else{
          setNavColor(false)
      }

  }
  window.addEventListener('scroll' ,changeNavColor);

  return (
    <div className={navColor ? 'header activeH' : 'header' }>
    <nav className='navbar'>
        <a href="!#"   className='logo'>
            {/* <img src={logo} alt='logo' /> */}
        </a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<i class="fa-solid fa-xmark"></i>)
                : (<i class="fa-solid fa-bars"></i>)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li  className='nav-item'>
                <a href="!#"  onClick={closeMenu}>Home</a>
            </li>
            <li  className='nav-item'>
                <a href="!#"   onClick={closeMenu}>About us</a>
            </li>
            <li  className='nav-item'>
                <a href="!#"   onClick={closeMenu}>Our Brands</a>
            </li>
            <li  className='nav-item'>
                <a href="!#"    onClick={closeMenu}>Blog</a>
            </li>
           

            <li   className='nav-item'>
                <a href='!#'    onClick={closeMenu}>Services</a>
            </li>

            <li   className='nav-item'>
                <a href='!#'   onClick={closeMenu}>Solutions</a>
            </li>

            <li  className='nav-item'>
              <button  className="btn-primary "  onClick={closeMenu}>Let's Chat <i className="fa-solid fa-arrow-right"></i></button>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default Header