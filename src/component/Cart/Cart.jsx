import React from 'react'
import { useCartContext } from '../../Context/Cart_context';
import { Cartitem } from './CartItem/Cartitem';
import "./Cart.css"
import { NavLink } from 'react-router-dom';
import { Formatprice } from '../../Helpers/Formatprice';
import { useAuth0 } from "@auth0/auth0-react";
export const Cart = () => {
  const{cart,deleteallcartdata,total_price,shipping_fee} = useCartContext(); 
  const { user, isAuthenticated} = useAuth0();
  if (cart.length === 0) {
    return <div className='my-5 emptycart text-center'><h1 className=' my-5'>No cart data</h1></div>
  }
  return (
    <div className='container-fluid d-flex justify-content-center '>
      <div className="container container-fluid g-0 d-flex justify-content-center">
           <div className="col-12 col-lg-9 ">
        {isAuthenticated && (<div className='cartuserprofile col-10 d-flex justify-content-left align-items-center  p-1'><img src={user.picture} alt={user.name} /><h6 className='ms-3'>{user.name}</h6></div>)}
              <div className="row text-center mt-3">
                <div className="col-5 col-sm-3"><p className='text-capitalize'>Item</p></div>
                <div className="col-2 d-none d-sm-block"><p className='text-capitalize'>price</p></div>
                <div className="col-3 col-sm-2"><p className='text-capitalize'>quantity</p></div>
                <div className="col-2 d-none d-sm-block"><p className='text-capitalize'>subtotal</p></div>
                <div className="col-3 col-sm-2"><p className='text-capitalize'>remove</p></div>
               <hr />
              </div>
                {cart.map((currelm)=>{
                  return <Cartitem key={currelm.id} {...currelm}/>
                })}
              <div className="row justify-content-between mt-5 cartfooter">
                <div className="col-7 col-lg-3"><NavLink to='/products' className="py-2 px-3 continuebtn">CONTINUE SHOPPING</NavLink></div>
                <div className="col-5 col-lg-3"><button className='py-2 px-3 clearbtn' onClick={()=>deleteallcartdata()}>CLEAR CART</button></div>
              </div>
              <div className="row justify-content-center justify-content-sm-end ">
                <div className="order-total-amount col-11 col-sm-8 col-md-5  p-4 mt-5">
                  <div className="row">
                    <div className="col-7">Subtotal :</div>
                    <div className="col-5"><h5><Formatprice price={total_price}/></h5></div>
                  </div>
                  <div className="row">
                    <div className="col-7">Shipping fee : </div>
                    <div className="col-5"><h5><Formatprice price={shipping_fee}/></h5></div>
                  <hr />
                  </div>
                 <div className="row">
                  <div className="col-7">Totalprice :</div>
                  <div className="order_total col-5 "><h5><Formatprice price={shipping_fee+total_price}/></h5></div>
                 </div>
                </div>
              </div>
           </div>
      </div>
    </div>
  )
}
