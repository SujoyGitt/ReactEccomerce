import { useContext,useEffect,useReducer,createContext} from "react";
import { UseProductcontext } from "./Productcontext";
import reducer from "../Reducer/Filter_Reducer";
const Filtercontext = createContext();

let initialstate = {
  filter_products:[],
  all_products:[],
  grid_view:false,
  list_view:true,
  sorting_value:'lowest',
  filters:{text:"",category:"All",company:"All",colors:"All",maxPrice:0,price:0,minPrice:0}
};

export const Filtercontextprovider = ({children})=>{
  let {products} = UseProductcontext();
  const [state,dispatch] = useReducer(reducer,initialstate);
// to set the grid view
const setgridview = ()=>{
  return dispatch({type:"SET_GIRDVIEW"})
}
// to set the list view
const setlistview = ()=>{
  return dispatch({type:"SET_LISTVIEW"})
}
//to clear the filters
let clearfilters = ()=>{
  return dispatch({type:"CLEAR_FITLERS"})
}
//sorting function start
let sorting = (event)=>{
  let uservalue = event.target.value;
  dispatch({type:"GET_SORT_VALUE",payload:uservalue});
}
useEffect(()=>{
  dispatch({type:"FILTER_PRODUCTS"})
  dispatch({type:"SORTING_PRODUCTS"})
},[products,state.sorting_value,state.filters])

useEffect(()=>{
  dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
 },[products])
// update the filter value

let updatefiltervalue =  (event)=>{
  let name = event.target.name;
  let value = event.target.value;
  return dispatch({type:'UPDATE_FILTERS_VALUE',payload:{name,value}});
} ;

return <Filtercontext.Provider value={{...state,setgridview,setlistview,sorting,updatefiltervalue,clearfilters}}>
  {children}
</Filtercontext.Provider>
}
export const useFitercontext = ()=>{
  return useContext(Filtercontext)
}