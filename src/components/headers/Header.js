import React,{useState} from 'react'
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
             <span onClick={() => setPop(true)}> <button   className="btn-primary "  onClick={closeMenu}>Let's Chat <i className="fa-solid fa-arrow-right"></i></button></span>
            </li>
        </ul>
    </nav>
</div>
  )
}

export default Header