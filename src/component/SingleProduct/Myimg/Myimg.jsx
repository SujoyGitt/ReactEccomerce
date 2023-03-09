import { useState } from "react";
import "./Myimg.css"
  let  Myimg = ({img}) =>{


let [mainimg,setimg] = useState(0);
if (img) {
  return (
    <div className="col-12 col-md-6 singleproductsimg d-flex justify-content-center ">
     <div className="row">
      <div className="col-12 col-md-4 singleproductimgmultiple">
       <div className="row g-1">
        {img.map((currntelem,id)=>{
          return (
          <>
            <div className="col-3 col-md-12 pb-2" key={id} onMouseEnter={()=>{setimg(id)}}><img src={currntelem.url} className="img-fluid" alt={img.filename}/></div>
          </>
          )
        })}
       </div>
     </div>

 <div className="col-12 col-md-8 d-flex justify-content-center align-items-center"><img src={img[mainimg].url} className="img-fluid" alt={img[mainimg].filename} /></div>

    </div>
   </div>
  )}
  else {
    return(
      <>
       <div>No images found.</div>
      </>
    );
  }
}
export default Myimg;