import React from 'react'
import { useState } from 'react';
import { Check } from '@material-ui/icons';
import "./Addtocart.css";
import { Carttotalamount } from './Carttotalamount/Carttotalamount';
export const Addtocart = ({products}) => {
 const {id,colors,stock} = products; 
  let [color,setcolor] = useState(colors[0]);
  let [amount,setamount] = useState(1);
  let dec=()=>{
   amount > 1 ? setamount(amount -1) : setamount(1)
  } 
   let inc=()=>{
    amount < stock ? setamount(amount+1) : setamount(stock)
  }
  return (<>
    <div className='colors d-flex justify-content-between align-items-center'>
      <p>Colors : {colors.map((currentcolor,index)=>{
        return <button className={color === currentcolor? "btnactive":""}  key={index} style={{background: currentcolor}} onClick={()=>{setcolor(currentcolor)}}>{color === currentcolor? <Check/> : ""}</button>
      })}</p>
       {/* add to cart */}
    </div>
    <Carttotalamount amount={amount} setdec={dec} setinc={inc} product={products} id={id} color={color}/>
    </>
  )
}
