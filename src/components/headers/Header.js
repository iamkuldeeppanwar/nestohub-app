import React,{useState} from 'react';
import logo from '../../images/logo.png';
const Header = ({setPop}) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  const [navColor,setNavColor]=useState(false);
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
            <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<i className="fa-solid fa-xmark"></i>)
                : (<i className="fa-solid fa-bars"></i>)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li  className='nav-item'>
                <a href="!#"  onClick={closeMenu}>Why Join Nestohub?</a>
            </li>
            <li  className='nav-item'>
                <a href="!#"   onClick={closeMenu}>Agent Case Studies</a>
            </li>
            {/* <li  className='nav-item'>
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
            </li> */}

            <li  className='nav-item'>
             <span onClick={() => setPop(true)}> <button className="btn-primary "  onClick={closeMenu}>Register/Sign In</button></span>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default Header