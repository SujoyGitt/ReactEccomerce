import React from 'react';
import "./Pagenavigation.css";
import { NavLink } from 'react-router-dom'
export const Pagenavigation = ({title}) => {
  return (
    <div className='container-fluid pagenavigation py-2'>
      <NavLink to="/" className="text-decoration-none">Home</NavLink>/{title}
      
    </div>
  )
}
