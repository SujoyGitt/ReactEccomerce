import React from 'react';
import "../Hero/Hero.css";
import img1 from "../Hero/img/family.jpg";
import img2 from "../Hero/img/Smileman.jpg";
import img3 from "../Hero/img/kids.jpg";
import img4 from "../Hero/img/teal.jpg";

export const Hero = ({title}) => {
  return (
    <div className='outer_full_width container-fluid'>
      <div className="inner_max_width container-fluid d-flex justify-content-center align-items-center flex-wrap">
        <div className="slides col-10 col-lg-8 mt-5 pt-5">
           <div className="slide_one col-12">
           <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-6 mb-5 mt-md-0">
               <span>Welcome To</span>
               <h1>{title}</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo. Tempora ipsum ex  atque dicta?</p>
               <button className='btn'>Shop now</button>
              </div>
             <div className="col-12 col-md-5 slider_one_img mb-5 mt-md-0"> <img src={img1} className="img-fluid" alt="img1" /></div>
            </div>
           </div>
         <div className="slide_two col-12">
           <div className="row d-flex justify-content-center align-items-center">
           <div className="col-12 col-md-5 mb-5 mt-md-0"> <img src={img2} className="img-fluid" alt="img1" /></div>
              <div className="col-12 col-md-6 mb-5 mt-md-0">
               <span>Ecluesive Offer on summer</span>
               <h1>55% discount</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo. Tempora ipsum ex  atque dicta?</p>
               <button className='btn'>Shop now</button>
              </div>
            </div>
          </div>
         <div className="slide_three col-12">
           <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-5 mb-5 mt-md-0"> <img src={img3} className="img-fluid" alt="im1" /></div>
              <div className="col-12 col-md-6 mb-5 mt-md-0">
               <span>Dhamaka Offers on kids cloths</span>
               <h1>UPTO 70% discount</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo. Tempora ipsum ex  atque dicta?</p>
               <button className='btn'>Shop now</button>
              </div>
            </div>
          </div>
         <div className="slide_four col-12">
           <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-6 mb-5 mt-md-0">
               <span>MEN Fasion</span>
               <h1>55% Offers </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo. Tempora ipsum ex  atque dicta?</p>
               <button className='btn'>Shop now</button>
              </div>
             <div className="col-12 col-md-5 mb-5 mt-md-0"> <img src={img4} className="img-fluid" alt="im1" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
