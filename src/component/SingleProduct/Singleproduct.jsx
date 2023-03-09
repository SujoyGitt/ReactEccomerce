
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UseProductcontext } from '../../Context/Productcontext';
import { Pagenavigation } from '../Pagenavigation/Pagenavigation';
import {Formatprice} from "../../Helpers/Formatprice";
import { LocalShipping,FindReplace ,Security} from '@material-ui/icons';
import  Myimg from './Myimg/Myimg';
import "./Singleproducts.css";
import {Stars} from "./Stars/Stars"
import { Addtocart } from './Addtocart/Addtocart';
const API = "https://api.pujakaitem.com/api/products";

export const Singleproduct = () => {
  const {getSingleProduct,issingleLoading,singleproduct} = UseProductcontext();  
  const {id} = useParams();
  const {name,company,price,description,stock,stars,reviews,image} = singleproduct;

  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`); 
  },[]);
  
if (issingleLoading) {
  return(
    <>
     <div>......Loading</div>
    </>
  )
}
  return (
    <div className='container-fluid  g-0 Singleproduct '>
      <Pagenavigation title={name}/>
      <div className="container d-flex justify-content-center align-items-center py-5">
          <div className="col-12 col-lg-10">
            <div className="row justify-content-between align-items-center p-2">
              {/* product imgge */}
               <Myimg img={image}/>
             {/* product data */}
                <div className="col-12 col-md-6">
                  <h3>{name}</h3>
                 <p> <Stars stars = {stars} reviews={reviews}/></p>
                  <p className="product_data_price">
                    MRP: <del> <Formatprice price={price + 250000}/></del>
                  </p>
                  <p className='product_data_real_price'>Deal of the Day: <Formatprice price={price}/></p>
                  <p className='description'>{description}</p>
                  <div className="col-12 product_data_warrenty g-0 p-0">
                    <div className="row g-0">
                      <div className="col-3 text-center  g-0">
                        <span className='deliveryicon'><LocalShipping/></span>
                        <p className='mt-2'>Free Delivery</p>
                      </div>
                      <div className="col-3 text-center">
                       <span className='deliveryicon'> <FindReplace/></span>
                        <p className='mt-2'>30 days replacement</p>
                      </div>
                      <div className="col-3 text-center">
                      <span className='deliveryicon'> <LocalShipping/></span>
                       <p className='mt-2'>Fashion Delivered</p>
                      </div>
                      <div className="col-3 text-center">
                       <span className='deliveryicon'> <Security/></span>
                        <p className='mt-2'>2 Years Warrenty</p>
                      </div>
                     <hr />
                    </div>
                  </div>
                  <div className="product-data-info">
                    <p>Available : <span>{stock > 0 ? "IN Stock" : "Not Available"}</span></p>
                    <p>ID : <span> {id} </span></p>
                    <p>Brand : <span> {company} </span></p>
                  </div>
                  <hr className='fw-bold'/>
                  {stock > 0 && <Addtocart products={singleproduct} />}
                  
                </div>
            </div>
        </div>
      </div>
   
    </div>
  )
}
