import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState(localStorage.getItem('selectedMenu') || 'shop');
    const handleMenuClick = (menuItem) => {
      setMenu(menuItem);
      localStorage.setItem('selectedMenu', menuItem);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    
    const handleDropdownEnter = () => {
      setDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
      setDropdownOpen(false);
    };

    const {getTotalCartItems} = useContext(ShopContext);

    useEffect(() => {
      localStorage.setItem('selectedMenu', menu);
    }, [menu]);
      

  return (
    <div className="navbar">
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <Link style={{textDecoration: 'none'}} to='/'><p>SHOPPER</p></Link>
        </div>
        <ul className='nav-menu'>
            <Link style={{textDecoration: 'none'}} to='/'> <li onClick={() => handleMenuClick('shop')}> Shop {menu === 'shop' ? <hr/> : <> </> } </li> </Link>
            <Link style={{textDecoration: 'none'}} to='/mens'> <li onClick={() => handleMenuClick('mens')}> Men {menu === 'mens' ? <hr/> : <> </> } </li> </Link>
            <Link style={{textDecoration: 'none'}} to='/womens'> <li onClick={() => handleMenuClick('womens')}> Women {menu === 'womens' ? <hr/> : <> </> } </li> </Link>
        </ul>
        <div className={`custom-dropdown ${isDropdownOpen ? 'open' : ''}`} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
            Category <span className="arrow">&#9662;</span>
            {isDropdownOpen && (
            <ul className="dropdown-content">
              <Link style={{textDecoration: 'none'}} to='/men'> <li className='hide-menu' onClick={() => handleMenuClick('men')}>  Men </li> </Link>
              <Link style={{textDecoration: 'none'}} to='/women'> <li className='hide-menu' onClick={() => handleMenuClick('women')}>  Women </li> </Link>
              <Link style={{textDecoration: 'none'}} to='/kids'> <li onClick={() => handleMenuClick('kids')}>  Kids </li> </Link>
              <Link style={{textDecoration: 'none'}} to='/footwear'> <li onClick={() => handleMenuClick('shoes')}> Footwear </li> </Link> 
              <Link style={{textDecoration: 'none'}} to='/furniture'> <li onClick={() => handleMenuClick('furniture')}> Furniture </li> </Link> 
            </ul>
            )}
        </div>
        <div className='nav-login-cart'>
          
          {localStorage.getItem('auth-token') 
          ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}> Logout </button>
          : <Link style={{textDecoration: 'none'}} to='/login'> <button>Login</button> </Link>}
            
          <Link style={{textDecoration: 'none'}} to='/cart'> <img src={cart_icon} alt='' /> </Link>
          <div className='nav-cart-count'> {getTotalCartItems()} </div>
        </div>
    </div>
  )
}

export default Navbar