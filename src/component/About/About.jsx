import React from 'react';
import { UseProductcontext } from '../../Context/Productcontext';
import { Hero } from '../Home/Hero/Hero';
export const About = () => {
  let {Myname} = UseProductcontext;

  return (
    <>
    {Myname}
      <Hero title="fashion Eccomers"/>
      </>
  )
}
