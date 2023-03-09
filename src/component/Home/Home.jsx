import React from 'react'
import { Hero } from './Hero/Hero';
import { Services } from '../Services/Services';
import { Trusted } from '../Trusted/Trusted';
import { FeatureProduct } from '../FeatureProduct/FeatureProduct';
 const Home = () => {
  return (<>
     <Hero title="Fashion Store"/>
     <FeatureProduct/>
     <Services/>
     <Trusted/>
     </>
  )
}
export default Home;