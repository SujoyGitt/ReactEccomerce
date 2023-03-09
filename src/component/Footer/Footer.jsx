import React from 'react'
import  "./Footer.css";
import { Gamepad ,Instagram,YouTube} from '@material-ui/icons';

export const Footer = () => {
  return (
    <div className='container-fluid footer g-0'>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-9 footer_parent">
          <div className="row footer_top d-flex d-flex justify-content-center justify-content-sm-between align-items-center px-1 px-md-3 px-lg-5 py-4">
            <div className="footer_top_left col-12 col-sm-7 col-lg-4 text-start ps-5">
              <span>Ready to get Started?</span>
              <p>Talk to US today</p>
            </div>
            <div className="footer_top_right col-10 col-sm-5 col-lg-3 text-center">
              <button className='btn'>GET STARTED</button>
            </div>
          </div>
          <div className="row pt-5 pb-4 mt-5">
            <div className="col-12 col-sm-6 col-lg-3">
              <span>Sujoy Ghosal</span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <p>Subscribe to get important updates</p>
              <input type="email" className='footeremail' placeholder='YOUR E-MAIL'/><br />
              <button className='btn mt-3'>SUBSCRIBE</button>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 footerfollow  mt-3 mt-sm-0">
              <span>Follow us</span>
              <div className='mt-3'>
                <a href="/"><Gamepad/></a>
                <a href="/" className='mx-3'><Instagram/></a>
                <a href="/"><YouTube/></a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-3 mt-sm-0">
              <span>Call us</span><br />
              <a href="tel:9064171925" className='footerph text-decoration-none mt-4'>+91 9064171925</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
     <div className="container-fluid d-flex justify-content-center align-items-center">
     <div className="col-8 footer_bottom">
        <div className="row">
          <div className="col-12 col-sm-6">@ {new Date().getFullYear()} Sujoy Ghosal.All Right Reserved</div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0"><span className='text-uppercase'>Privacy Policy</span><p className='text-uppercase'>Terms&Conditions</p></div>
        </div>
      </div>
     </div>
    </div>
  )
}
