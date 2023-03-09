import React from 'react'
import "./Listview.css";
import { Formatprice } from '../../../../Helpers/Formatprice';
import { NavLink } from 'react-router-dom';

export const Listview = ({products}) => {
  return (<>
{ products.map(((currentelem,index)=>{
  let {id,name,image,price,description} = currentelem;
    return(
      <>
      <div className='col-12 card mt-3 Listview' key={index} >
        <div className="row">
         <div className="col-12 col-sm-6 p-3 listviewimg">
            <img src={image} alt={name + "jpg"} className="container-fluid"/>
         </div>
         <div className="col-12 col-sm-6 p-2  p-sm-1  px-sm-2 px-3">
           <h3>{name}</h3>
           <p><Formatprice price={price}/></p>
           <p>{description.slice(1,120)}...</p>
           <NavLink to={`/singleproducts/${id}`} className='btn px-4 py-2'>READ MORE</NavLink>
         </div>
     </div>
    </div> 
      </>
    )}))
}
  
    </>
  )
}
