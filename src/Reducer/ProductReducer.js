const ProductReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "API-ERROR":
      return { ...state, isLoading: false, iserror: true };
    case "SET_API_DATA":
      const  featuresdata = action.payload.filter((currentEle)=>{
              return currentEle.featured === true;
      });
      return { ...state, isLoading: false,  products:action.payload, featuresProducts:featuresdata };

      case "SET_SINGLE_LOADING":
        return { ...state, issingleLoading: true };
      case "SET_SINGLE_DATA":
        return { ...state, issingleLoading: false,singleproduct:action.payload };
      case "API-SINGLE-ERROR":
          return { ...state, issingleLoading: false, iserror: true };

    default:
      return state;
  }
};

export default ProductReducer;
