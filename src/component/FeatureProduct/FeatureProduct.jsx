import React from 'react'
import { UseProductcontext } from '../../Context/Productcontext';
import './FeatureProduct.css';
import { Products } from './Products';

export const FeatureProduct = () => {
  const {isLoading,featuresProducts} = UseProductcontext();
  if(isLoading){
    return <div>.......Loading</div>
  }
  return (
  <div className='FeatureProduct container-fluid py-5'>
   <div className="container-fluid d-flex justify-content-center align-items-center">
     <div className="col-8">
       <span>CHECK NOW!</span>
       <h3>Our Features Service</h3>
     </div>
   </div>
   <div className="container-fluid d-flex justify-content-center align-items-center">
      
        <div className="col-12 col-md-9">
          <div className="row justify-content-evenly g-0">
            {featuresProducts.map((currentelm)=>{
              return <Products key={currentelm.id} {...currentelm}/>
            })}
          </div>
      </div>
    </div>
  </div>
  )
}
