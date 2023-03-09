import React from 'react';
import { Filtersection } from './Filtersection/Filtersection';
import { Sort } from './Sort/Sort';
import { ProductList } from './ProductList/ProductList';
export const Products = () => {
 
  return (
    <div className='container-fluid'>
     <div className="row justify-content-center">
      <div className="col-12 col-lg-9">
        <div className="row g-0">
          <div className="col-12  col-md-3 mt-4">
            <Filtersection/>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-md-end justify-content-between align-items-center py-2">
                 <Sort/>
                </div>
              </div>
              <div className="col-12">
                <ProductList/>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}
