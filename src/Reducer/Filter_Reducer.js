const Filterreducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let pricearry = action.payload.map((currentelm) => currentelm.price);
      //three type method for get maxprice :)

      // let maxprice = Math.max.apply(Math,pricearry);
      // let maxPrice = pricearry.reduce((initialval,currentval)=>Math.max(initialval,currentval),0)
      let maxPrice = Math.max(...pricearry);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GIRDVIEW":
      return { ...state, grid_view: true };
    case "SET_LISTVIEW":
      return { ...state, list_view: true, grid_view: false };
    case "GET_SORT_VALUE":
      //  let sort_value = document.querySelector('#sort').value;
      return { ...state, sorting_value: action.payload };

    case "SORTING_PRODUCTS":
      let newsortdata;
      const { filter_products, sorting_value } = state;
      let tempsortproducts = [...filter_products];
      const sortingproducts = (a, b) => {
        switch (sorting_value) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            break;
        }
      };
      newsortdata = tempsortproducts.sort(sortingproducts);
      return { ...state, filter_products: newsortdata };


     case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      console.log(name,value);
      return {
        ...state,
        filters: {...state.filters,[name]: value}
      };


    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempfilter = [...all_products];
      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempfilter = tempfilter.filter((currentelm) => {
        return  currentelm.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        tempfilter = tempfilter.filter((currentelm) => {
          return currentelm.category === category;
        });
      }
      if (company !== "All") {
        tempfilter = tempfilter.filter((currentelm) => {
          return currentelm.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (colors !== "All") {
        tempfilter = tempfilter.filter((currentelm) => {
          return currentelm.colors.includes(colors);
        });
      }
      if (price === 0) {
        tempfilter = tempfilter.filter(
          (currentelm) => currentelm.price === price
        );
      } else {
        tempfilter = tempfilter.filter(
          (currentelm) => currentelm.price <= price
        );
      }
      return { ...state, filter_products: tempfilter };

    case "CLEAR_FITLERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};
export default Filterreducer;
