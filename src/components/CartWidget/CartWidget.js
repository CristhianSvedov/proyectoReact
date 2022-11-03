import React from 'react'
import logo from '../../assets/icon-cart.svg'
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='menu-navbar-logo'>
        <img className='menu-navbar-img' src={logo} alt= "Cart"/>
    </div>
  )
}

export default CartWidget