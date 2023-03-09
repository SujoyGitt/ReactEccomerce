import React from 'react'
import { LocalShipping } from '@material-ui/icons';
import { Save } from '@material-ui/icons';
import { Security } from '@material-ui/icons';
import { Payment } from '@material-ui/icons';
import "../Services/Services.css"
export const Services = () => {
  return (
    <div className='container-fluid servicecontainer d-flex justify-content-center align-items-center py-lg-5 py-0'>
      <div className="col-9 services">
        <div className="row d-flex justify-content-evenly g-0">
          <div className="col-12 col-md-5 col-lg-3 text-center service_bg mt-4 mt-lg-0">
            <div className='my-4'>
              <span className='servicelogo'><LocalShipping/></span>
              <p>Super Fast and Free Delivery</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3 text-center services_work mt-4 mt-lg-0">
            <div className="row d-flex justify-content-center align-items-between">
              <div className="col-12 service_bg py-3">
                <span className='servicelogo'><Save/></span><span className='ms-1'>No contract Shipping</span>
              </div>
              <div className="col-12 service_bg mt-4 py-3">
                <span className='servicelogo'><Payment/></span><span className='ms-1'>Money-back Gurrenty</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3 text-center services_work service_bg mt-4 mt-lg-0">
            <div className='my-4'>
              <span className='servicelogo'><Security/></span>
              <p>Super Fast and Free Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
