import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import  reducer from '../Reducer/ProductReducer';
const Appcontext  = createContext();

let API = "https://api.pujakaitem.com/api/products";
let initialstate = {
  isLoading:false,
  iserror:false,
  products:[],
  featuresProducts:[],
  issingleLoading:false,
  singleproduct:{}
}
let AppProvider = ({children})=>{
  let[state,dispatch] = useReducer(reducer,initialstate);

  let getfeaturesproducts = async (url)=>{
    dispatch({type:"SET_LOADING"});
     try {
     const response =await axios.get(url);
     const products = await response.data;
     dispatch({type:"SET_API_DATA",payload:products});
     } catch (error) {
      dispatch({type:"API-ERROR"})
     } 
  };
  // my 2nd api call for single product
  let getSingleProduct = async (url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(url);
      let singleproduct =response.data;
      dispatch({type:"SET_SINGLE_DATA",payload:singleproduct});
    }catch (error) {
      dispatch({type:"API-SINGLE-ERROR"})
    }
  }

  useEffect(()=>{
          getfeaturesproducts(API)
  },[]);
  
  return <Appcontext.Provider value={{...state,getSingleProduct}}>{children}</Appcontext.Provider>
};
// custom hooks
const UseProductcontext = ()=>{
  return useContext(Appcontext);
}
export {AppProvider,Appcontext,UseProductcontext};
 