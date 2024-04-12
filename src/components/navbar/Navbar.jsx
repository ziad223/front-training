import './navbar.css';
import { LuMoon } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSun } from "react-icons/fi";

const Navbar = ({cartItems , dark , isDark}) => {
  const [openMenu , setOpenMenu] = useState(false);

  function isOpen(){
    setOpenMenu(!openMenu)
  }

  useEffect(() =>{
     document.querySelector(".menu").onclick = function(){
      document.querySelector(".nav-middle ul").classList.toggle("open")
     }
  } , [])
  return (
    <div className='navbar'>
       <div className="nav-left">
        <Link to='/' className='logo'>
        <h2>Bravo <span>Shopping</span></h2>
        </Link>
       </div>
       <div className="nav-middle">
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className='nav-link'><a href="#">
             <div className="h"  onClick={isOpen}>
             Products
            <FaChevronDown/>
             </div>
           {openMenu && 
              <div className="nav-menu">
              <Link to="/fakeProducts" onClick={() =>setOpenMenu(false)}>Fake Api</Link>
              <Link to="/dummyProducts" onClick={() =>setOpenMenu(false)}>Dummy Json</Link>
             </div>
           }
            </a></li>
          <li><Link to="/services">Services</Link></li>
        
          <li><Link to="/contact">Contact</Link></li>
        </ul>
       </div>
        <FiMenu className='menu'/>
       <div className="nav-right">
        {dark ? 
        <FiSun className='nav-icon sun' onClick={isDark}/>
        :
        <LuMoon className='nav-icon' onClick={isDark}/>
        }
        <FaHeart  className='nav-icon heart'/>
        <Link to='/cart' className='shopping'>
        <MdOutlineShoppingBag className='nav-icon'/>
        </Link>
        <span>{cartItems.length}</span>
       </div>
    </div>
  )
}

export default Navbar
