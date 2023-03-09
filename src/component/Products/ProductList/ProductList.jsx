import React from 'react';
import "./ProductList.css";
import { useFitercontext } from '../../../Context/Filter_context';
import { Gridview } from './Gridview/Gridview';
import {Listview} from './Listview/Listview'
export const ProductList = () => {
  const {filter_products,grid_view} = useFitercontext();
  if (grid_view === true) {
     return <Gridview products={filter_products}/>
  }
  if(grid_view === false){
    return <Listview products={filter_products}/>
  }
}
 