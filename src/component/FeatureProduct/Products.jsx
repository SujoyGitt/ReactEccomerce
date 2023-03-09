import React from 'react';
import { NavLink } from 'react-router-dom';
import {Formatprice} from "../../Helpers/Formatprice";
export const Products = (currentelm) => {
  const {id,name,image,price,category} = currentelm;
  return (
           <NavLink to={`/singleproducts/${id}`} className='col-10 col-sm-5 col-lg-3 text-decoration-none featureservice display-inline-block g-0 mt-3'>
              <div className="featuresimg"><img src={image} className='container-fluid' alt="productimg" /></div>
              <div className="featurebadge">{name}</div>
              <div className="featureprice d-flex justify-content-between px-2">
                <p>{category}</p>
                <p><Formatprice price={price}/></p>
              </div>
           </NavLink>
  )
}
