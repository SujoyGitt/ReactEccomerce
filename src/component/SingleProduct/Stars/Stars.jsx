import React from 'react'
import "./Stars.css";
import { Star ,StarHalf,StarOutline} from '@material-ui/icons';


export const Stars = ({stars,reviews}) => {
 let ratingstars = Array.from({length:5},(elem,index)=>{
    let number = index + 0.5;
    return <span key={index}> 
   {stars >= index + 1? <Star/> : stars >= number ? <StarHalf/>:<StarOutline/>}
   </span> 
  });

  return (
    <div className='icon-style'>
      {ratingstars} <span>({reviews} Customer reviews)</span>
    </div>
  )
}
