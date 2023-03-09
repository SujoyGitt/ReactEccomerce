import React from 'react'
import  "./Cartitem.css";
import {Formatprice} from "../../../Helpers/Formatprice";
import  { Carttotalamount } from "../../SingleProduct/Addtocart/Carttotalamount/Carttotalamount";
import { Delete } from '@material-ui/icons';
import { useCartContext } from '../../../Context/Cart_context';
export const Cartitem = ({id,Name,color,image,price,amount}) => {
  let {deletecartdata,setdecrease,setincrease} = useCartContext(); 

  return (
    <div className="row cart-item g-0 mt-2">
      <div className="col-5 col-sm-3">
        <div className="row g-0 justify-content-between align-items-start">
          <div className="col-5">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col-6 ">
            <div className='col-12'>{Name}</div>
            <div className='col-12'>color:<span className='color-style ms-1' style={{backgroundColor:color}}></span></div>
          </div>
        </div>
      </div>
      <div className="d-none d-sm-block col-2 cart-hide text-center mt-3">
        <p><Formatprice price={price}/></p>
      </div>
      {/* quentity */}
      <div className="col-3 col-sm-2 d-flex justify-content-center align-items-center mb-3">
        <Carttotalamount amount={amount} setdec={()=>setdecrease(id)} setinc={()=>setincrease(id)} />
      </div>
      {/* subtotal */}
      <div className="d-none d-sm-block cart-hide col-2 text-center mt-3">
       <p><Formatprice price={price*amount}/></p>
      </div>
      {/* Remove */}
      <div className="col-3 col-sm-2 text-center ms-1 delete-icon mt-3">
        <Delete onClick={()=>deletecartdata(id)}/>
      </div>
    </div>
  )
}
