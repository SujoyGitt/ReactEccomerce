import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Nav from './Navbar';
export const Header = () => {
  return (
    <div>
      <div className="main-header">
        <NavLink to="/" className='logo'><span>Fashion</span> Store</NavLink>
        <Nav/>
      </div>
    </div>
  )
}
