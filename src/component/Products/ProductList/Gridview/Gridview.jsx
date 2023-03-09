import React from 'react'
import "./Gridview.css";
import { Products } from "../../../FeatureProduct/Products";

export const Gridview = ({products}) => {

  return (
    <div className="row justify-content-between gridview">
     {products.map((currentelm)=>{
        return <Products key={currentelm.id} {...currentelm} />
     })}
    </div>
  )
}
