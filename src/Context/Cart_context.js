import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "../Reducer/Cart_reducer";
const Cartcontext = createContext();

let getlocalcart=()=>{
  let newcartdata = localStorage.getItem("sujudata");
  console.log(newcartdata)
  if(newcartdata === null){
   return []
  }else{
   return JSON.parse(newcartdata);
  }

}
const initialstate = {
  // cart:[],
  cart:getlocalcart(),
  total_item:"",
  total_price:"",
  shipping_fee:5000
}

const Cartpovider = ({children})=>{
 const [state,dispatch] = useReducer(reducer,initialstate); 

 const addtoCart=(id,color,amount,product,price)=>{
   dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product,price}});
 }
//  increment and decrement the product
const setdecrease = (id)=>{
dispatch({type:'SET_DECREASE',payload:id})
}
const setincrease = (id)=>{
  dispatch({type:'SET_INCREASE',payload:id})
}
 //to remove indivisual item form cart
 let deletecartdata = (id)=>{
  dispatch({type:'REMOVE_ITEM',payload:id})
 }
//  to clear all cart data
 let deleteallcartdata = ()=>{
  dispatch({type:"REMOVE_ALL_CARTDATA"})
 }
//  add the data in localstorage
//get vs set
useEffect(()=>{
  // dispatch({type:"CART_TOTAL_ITEM"});
  // dispatch({type:"CART_TOTAL_PRICE"});
  dispatch({type:"CART_ITEM_PRICE_TOTAL"});
  localStorage.setItem('sujudata',JSON.stringify(state.cart));
},[state.cart])

  return <Cartcontext.Provider value={{...state,addtoCart,deletecartdata,deleteallcartdata,setdecrease,setincrease}}>
    {children}
  </Cartcontext.Provider>
}
let useCartContext = ()=>{
  return useContext(Cartcontext)
}
export {Cartpovider,useCartContext};