import React from 'react'
import "./Trusted.css";
import { ZoomOutMapSharp } from '@material-ui/icons';
import { AddCircleOutlineRounded } from '@material-ui/icons';
import { LocalGasStation } from '@material-ui/icons';
import { LeakRemove } from '@material-ui/icons';
import { TrendingUp } from '@material-ui/icons';
export const Trusted = () => {
  return (
    <div className='Trusted container-fluid py-5 mt-5 mt-lg-0'>
      <p className='text-center fw-bold pb-3'>Trusted by 100+ companies</p>
     <div className="container-fluid d-flex justify-content-center align-items-center">
     <div className="col-md-7 col-10 ">
        <div className="row justify-content-md-between justify-content-center">
          <div className="col-sm-4 col-6 col-md-2 mt-3 mt-lg-0 trusted_log text-center"><ZoomOutMapSharp/>ZEINA</div>
          <div className="col-sm-4 col-6 col-md-2 mt-3 mt-lg-0 trusted_log text-center"><AddCircleOutlineRounded/></div>
          <div className="col-sm-4 col-6 col-md-2 mt-3 mt-lg-0 trusted_log text-center"><LocalGasStation/>LOGIC+</div>
          <div className="col-sm-4 col-6 col-md-2 mt-3 mt-lg-0 trusted_log text-center"><LeakRemove/></div>
          <div className="col-sm-4 col-6 col-md-2 mt-3 mt-lg-0 trusted_log text-center"><TrendingUp/>CHARTZ</div>
        </div>
      </div>
     </div>
    </div>
  )
}
