import React from 'react'
import "./Sort.css";
import { List ,GridOn} from '@material-ui/icons';
import { useFitercontext } from '../../../Context/Filter_context';

// import { useState } from 'react';
export const Sort = () => {
 const {filter_products,grid_view,setgridview,setlistview,sorting} = useFitercontext();
  return (
   <>
     <div className="view col-6 col-sm-3">
        <span className={!grid_view ? "list active mb-3" : "list mb-3"} onClick={setlistview}><List/></span>
        <span className={grid_view ? "grid active mb-3" : "grid mb-3"}  onClick={setgridview}><GridOn/></span>
     </div>

     <div className="totalproduct col-6 col-sm-4 text-center"><p>{filter_products.length} products available</p></div>
      <div className="priceformat col-7 col-sm-4 text-end">
        <form action="">
         <select name='sort' className='p-1 sort' id='sort' onClick={sorting}>
          <option value="lowest">price(lowest)</option>
          <option value="highest">price(highest)</option>
          <option value="a-z">price(a-z)</option>
          <option value="z-a">price(z-a)</option>
         </select>
        </form>
      </div>
  </>
  )
}
