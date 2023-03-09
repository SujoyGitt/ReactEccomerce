import React from 'react'
import "./Carttotalamount.css";
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../../../Context/Cart_context';
export const Carttotalamount = ({amount,setdec,setinc,product,id,color}) => {
  let {addtoCart} = useCartContext();
  
  return (
    <div className='cart-button '>
      <div className="amount-toggle d-flex">
        <button onClick={()=>{setdec()}}>  <Remove/>  </button>
        <div className="amount-style mx-2">  {amount}  </div>
        
        <button onClick={()=>{setinc()}}>  <Add/>  </button>
      </div>
      <NavLink to="/cart" className='btn cartbtn' onClick={()=>addtoCart(id,color,amount,product)}>Add to cart</NavLink>
    </div>
  )
}
